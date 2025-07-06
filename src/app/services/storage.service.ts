import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

    get<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
    }

    set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
