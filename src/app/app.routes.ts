import { Routes } from '@angular/router';
import { StackLayoutComponent }    from './layouts/stack-layout/stack-layout.component';
import { HomeComponent }           from './home/home.component';
import { PlayersComponent }        from './players/players.component';
import { TournamentComponent }     from './tournament/tournament.component';
import { StepCreatePlayersComponent } from './tournament/step-create-players/step-create-players.component';
import { StepCreateGroupsComponent }  from './tournament/step-create-groups/step-create-groups.component';
import { StepConfigComponent }        from './tournament/step-config/step-config.component';
import { StepStartComponent }         from './tournament/step-start/step-start.component';

export const routes: Routes = [
  {
    path: '',
    component: StackLayoutComponent,
    children: [
      { path: '',       redirectTo: 'home',   pathMatch: 'full' },
      { path: 'home',   component: HomeComponent },
      { path: 'players',component: PlayersComponent },
      {
        path: 'tournament',
        component: TournamentComponent,
        children: [
          { path: '',                 redirectTo: 'create-players', pathMatch: 'full' },
          { path: 'create-players',   component: StepCreatePlayersComponent },
          { path: 'create-groups',    component: StepCreateGroupsComponent },
          { path: 'config',           component: StepConfigComponent },
          { path: 'start',            component: StepStartComponent },
        ]
      },
    ],
  },
  { path: '**', redirectTo: '' }
];
