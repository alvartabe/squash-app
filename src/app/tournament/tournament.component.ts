// tournament.component.ts
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-tournament',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './tournament.component.html',
})
export class TournamentComponent {
    steps = [
        { path: 'create-players', label: 'Agregar jugadores' },
        { path: 'create-groups', label: 'Crear grupos' },
        { path: 'config', label: 'Reglas' },
        { path: 'start', label: 'Inicio' },
    ];

    currentStepIndex = 0;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
            const last = this.router.url.split('/').pop()!;
            this.currentStepIndex = this.steps.findIndex((s) => s.path === last);
        });
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
