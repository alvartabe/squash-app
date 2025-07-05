export interface PagedList<T> {
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    items: T[];
}
