import { Injectable } from '@angular/core';
import { Observable, forkJoin, from, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { PagedList } from '../models/paged-list';
import { Player } from '../models/player.mode';
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

    getPlayers(): Observable<PagedList<Player>> {
        const query = `*[_type == "players"].players[] { fullName }`;

        return from(this.client.fetch<{ items: Player[] }>(query)).pipe(
            map(({ items }) => ({
                items,
                totalItems: items.length,
                pageNumber: 1,
                pageSize: items.length,
            }))
        );
    }
}
