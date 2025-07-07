// tournament.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-tournament',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './tournament.component.html',
})
export class TournamentComponent implements OnInit {
    steps = [
        { path: 'create-players', label: 'Jugadores' },
        { path: 'create-groups', label: 'Grupos' },
        { path: 'config', label: 'Reglas' },
        { path: 'start', label: 'Inicio' },
    ];
    currentStepIndex = 0;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.updateCurrentStep();
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.updateCurrentStep());
    }

    private updateCurrentStep() {
        const last = this.router.url.split('/').pop()!;
        const idx = this.steps.findIndex((s) => s.path === last);
        this.currentStepIndex = idx >= 0 ? idx : 0;
    }

    prevStep() {
        if (this.currentStepIndex > 0) {
            const prev = this.steps[this.currentStepIndex - 1].path;
            this.router.navigate([prev], { relativeTo: this.route });
        }
    }

    nextStep() {
        if (this.currentStepIndex < this.steps.length - 1) {
            const next = this.steps[this.currentStepIndex + 1].path;
            this.router.navigate([next], { relativeTo: this.route });
        }
    }
}
