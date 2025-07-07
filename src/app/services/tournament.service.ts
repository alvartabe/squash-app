import { Injectable } from '@angular/core';
import { State } from '@muziehdesign/angularcore';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

export interface TournamentStateData {
    selectedPlayerKeys: string[];
    groups: Array<{
        name: string;
        playerKeys: string[];
    }>;
}

const DEFAULT_GROUPS = [
    { name: 'Grupo 1', playerKeys: [] as string[] },
    { name: 'Grupo 2', playerKeys: [] as string[] },
];

const STORAGE_KEY = 'tournament-state';

@Injectable({ providedIn: 'root' })
export class TournamentService {
    private state: State<TournamentStateData>;

    constructor(private storage: StorageService) {
        const saved = this.storage.get<TournamentStateData>(STORAGE_KEY);
        this.state = new State<TournamentStateData>({
            selectedPlayerKeys: saved?.selectedPlayerKeys ?? [],
            groups: saved?.groups ?? DEFAULT_GROUPS,
        });

        this.state.stateChanges().subscribe((data) => this.storage.set(STORAGE_KEY, data));
    }

    stateChanges(): Observable<TournamentStateData> {
        return this.state.stateChanges();
    }

    getSnapshot(): TournamentStateData {
        return this.state.getSnapshot();
    }

    togglePlayer(key: string): void {
        const current = this.getSnapshot().selectedPlayerKeys;
        const index = current.indexOf(key);
        let updated: string[];

        if (index >= 0) {
            updated = current.filter((k) => k !== key);
        } else {
            updated = [...current, key];
        }

        this.state.patch({ selectedPlayerKeys: updated });
    }

    clearPlayers(): void {
        this.state.patch({ selectedPlayerKeys: [] });
    }

    setGroups(groups: { name: string; playerKeys: string[] }[]) {
        this.state.patch({ groups });
    }

    getGroups(): { name: string; playerKeys: string[] }[] {
        return this.state.getSnapshot().groups;
    }
}
