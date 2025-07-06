import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { ResultTableComponent, ResultTableModel } from '@muziehdesign/components';
import { PlayerModel } from '../models/player.model';

@Component({
    selector: 'app-players',
    imports: [ResultTableComponent],
    templateUrl: './players.component.html',
    styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
    results!: ResultTableModel<PlayerModel>;
    loading = true;

    constructor(private service: PlayerService) { }

    ngOnInit(): void {
        this.service.getAllPlayers().subscribe((response) => {
            console.log(response.items);

            this.results = {
                items: response.items,
                pageNumber: 1,
                pageSize: response.pageSize,
                totalItems: response.totalItems,
            };

            this.loading = false;
        });
    }
}
