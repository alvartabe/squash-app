import { Injectable } from '@angular/core';
import { Observable, forkJoin, from, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { PagedList } from '../models/paged-list';
import { PlayerModel } from '../models/player.model';
import sanityClient, { createClient, SanityClient } from '@sanity/client';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    private client: SanityClient;

    constructor() {
        this.client = createClient({
            projectId: environment.sanity.projectId,
            dataset: environment.sanity.dataset,
            useCdn: environment.sanity.useCdn,
            apiVersion: environment.sanity.apiVersion,
        });
    }

    getAllPlayers(): Observable<PagedList<PlayerModel>> {
        const query = `*[_type == "players"].players[] { fullName, _key }`;

        return from(this.client.fetch<(PlayerModel | null)[]>(query)).pipe(
            map((response) => {
                const itemsWithNulls = response || [];
                const items = itemsWithNulls.filter((item): item is PlayerModel => item !== null).sort((a, b) => a.fullName.localeCompare(b.fullName));
                return {
                    items,
                    totalItems: items.length,
                    pageNumber: 1,
                    pageSize: items.length,
                };
            })
        );
    }
}
