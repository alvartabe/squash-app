import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentService } from '../../services/tournament.service';
import { TournamentFormat } from '../../models/tournament-format.enum';

@Component({
    selector: 'app-step-config',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './step-config.component.html',
    styleUrls: ['./step-config.component.scss'],
})
export class StepConfigComponent implements OnInit {
    formats = TournamentFormat;
    selectedFormat!: TournamentFormat;
    formatLabels: Record<TournamentFormat, string> = {
        [TournamentFormat.BestOf5To11]: '3 de 5 a 11 (ganar por 2)',
        [TournamentFormat.BestOf3To11]: '2 de 3 a 11 (ganar por 2)',
        [TournamentFormat.OneTo15SuddenDeath]: '1 a 15 muerte súbita',
        [TournamentFormat.TwoOf3To7SuddenDeath]: '2 de 3 a 7 muerte súbita',
        [TournamentFormat.OneTo11WinBy2]: '1 a 11 (ganar por 2)',
    };

    constructor(private tournament: TournamentService) {}

    ngOnInit(): void {
        this.tournament.stateChanges().subscribe((state) => {
            this.selectedFormat = state.format;
        });
    }

    onFormatChange(formatKey: string): void {
        const fmt = TournamentFormat[formatKey as keyof typeof TournamentFormat];
        this.tournament.setFormat(fmt);
    }

    formatLabel(format: TournamentFormat): string {
        return this.formatLabels[format];
    }
}
