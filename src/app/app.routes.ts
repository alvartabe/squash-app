import { Routes } from '@angular/router';
import { StackLayoutComponent } from './layouts/stack-layout/stack-layout.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
    {
        path: '',
        component: StackLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'players', component: PlayersComponent },
        ],
    },
    { path: '**', redirectTo: '' },
];
