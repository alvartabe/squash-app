import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { TournamentService } from '../../services/tournament.service';
import { Skeleton1Component } from '../../skeletons/skeleton1/skeleton1.component';
import { PlayerModel } from '../../models/player.model';

@Component({
    selector: 'app-step-create-players',
    standalone: true,
    imports: [Skeleton1Component], 
    templateUrl: './step-create-players.component.html',
    styleUrls: ['./step-create-players.component.scss'],
})
export class StepCreatePlayersComponent implements OnInit {
    loading = true;
    players: PlayerModel[] = [];
    selectedKeys: string[] = [];

    constructor(private playerService: PlayerService, private tournament: TournamentService) {}

    ngOnInit(): void {
        this.tournament.stateChanges().subscribe((state) => {
            this.selectedKeys = state.selectedPlayerKeys;
        });

        this.playerService.getAllPlayers().subscribe((response) => {
            this.players = response.items;
            this.loading = false;
        });
    }

    onToggle(key: string): void {
        this.tournament.togglePlayer(key);
    }
}
