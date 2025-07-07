import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TournamentService } from '../../services/tournament.service';
import { PlayerService } from '../../services/player.service';
import type { PlayerModel } from '../../models/player.model';

@Component({
    selector: 'app-step-create-groups',
    standalone: true,
    imports: [CommonModule, DragDropModule],
    templateUrl: './step-create-groups.component.html',
    styleUrls: ['./step-create-groups.component.scss'],
})

export class StepCreateGroupsComponent implements OnInit {
    loading = true;
    unassigned: PlayerModel[] = [];
    groups: { name: string; items: PlayerModel[] }[] = [];

    constructor(private tournament: TournamentService, private playerService: PlayerService) {}

    ngOnInit() {
        const { selectedPlayerKeys, groups: savedGroups } = this.tournament.getSnapshot();
        this.playerService.getAllPlayers().subscribe(({ items }) => {
            const selected = items.filter((player) => selectedPlayerKeys.includes(player._key));

            this.unassigned = selected.filter((player) => !savedGroups.some((group) => group.playerKeys.includes(player._key)));

            this.groups = savedGroups.map((group) => ({
                name: group.name,
                items: selected.filter((player) => group.playerKeys.includes(player._key)),
            }));
            this.loading = false;
        });
    }

    drop(event: CdkDragDrop<PlayerModel[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }

        const newGroupsState = this.groups.map((group) => ({
            name: group.name,
            playerKeys: group.items.map((player) => player._key),
        }));

        this.tournament.setGroups(newGroupsState);
    }
}
