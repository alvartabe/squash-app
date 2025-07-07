import { Injectable } from '@angular/core';
import { State } from '@muziehdesign/angularcore';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

export interface TournamentStateData {
    selectedPlayerKeys: string[];
    groupCount: number;
    groups: Array<{ name: string; playerKeys: string[] }>;
}

const STORAGE_KEY = 'tournament-state';
const DEFAULT_GROUP_COUNT = 2;

@Injectable({ providedIn: 'root' })
export class TournamentService {
    private state: State<TournamentStateData>;

    constructor(private storage: StorageService) {
        const saved = this.storage.get<TournamentStateData>(STORAGE_KEY);
        const groupCount = saved?.groupCount ?? DEFAULT_GROUP_COUNT;
        const groups =
            saved?.groups ??
            Array.from({ length: groupCount }, (_, i) => ({
                name: `Grupo ${i + 1}`,
                playerKeys: saved?.groups?.[i]?.playerKeys ?? [],
            }));

        this.state = new State<TournamentStateData>({
            selectedPlayerKeys: saved?.selectedPlayerKeys ?? [],
            groupCount,
            groups,
        });

        this.state.stateChanges().subscribe((data) => {
            this.storage.set(STORAGE_KEY, data);
        });
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
        const updated = index >= 0 ? current.filter((k) => k !== key) : [...current, key];
        this.state.patch({ selectedPlayerKeys: updated });
    }

    setGroups(groups: { name: string; playerKeys: string[] }[]): void {
        this.state.patch({ groups });
    }

    setGroupCount(count: number): void {
        // adjust groups array length when count changes
        const { groups, selectedPlayerKeys } = this.getSnapshot();
        const newGroups = Array.from({ length: count }, (_, i) => {
            const existing = groups[i];
            return {
                name: existing?.name ?? `Grupo ${i + 1}`,
                playerKeys: existing?.playerKeys.filter((key) => selectedPlayerKeys.includes(key)) ?? [],
            };
        });
        this.state.patch({ groupCount: count, groups: newGroups });
    }
}
