import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TournamentService } from '../../services/tournament.service';
import type { PlayerModel } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

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
    groupCount = 2;

    constructor(private tournament: TournamentService, private playerService: PlayerService) {}

    ngOnInit(): void {
        // subscribe to state for groupCount & groups
        this.tournament.stateChanges().subscribe((state) => {
            this.groupCount = state.groupCount;
            // rebuild UI groups from state
            const selectedKeys = state.selectedPlayerKeys;
            this.playerService.getAllPlayers().subscribe(({ items }) => {
                const selected = items.filter((p) => selectedKeys.includes(p._key));
                // update unassigned
                const assignedKeys = state.groups.flatMap((g) => g.playerKeys);
                this.unassigned = selected.filter((p) => !assignedKeys.includes(p._key));
                // map groups
                this.groups = state.groups.map((g) => ({
                    name: g.name,
                    items: selected.filter((p) => g.playerKeys.includes(p._key)),
                }));
                this.loading = false;
            });
        });
    }

    onCountChange(event: Event) {
        const count = +(event.target as HTMLInputElement).value;
        this.tournament.setGroupCount(count);
    }

    drop(event: CdkDragDrop<PlayerModel[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        // persist groups
        const newGroups = this.groups.map((g) => ({
            name: g.name,
            playerKeys: g.items.map((p) => p._key),
        }));
        this.tournament.setGroups(newGroups);
    }
}
