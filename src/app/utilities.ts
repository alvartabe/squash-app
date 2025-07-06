// import { WritableSignal, signal } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable, catchError, firstValueFrom, map, of } from 'rxjs';

// export function createOperationResultSignal<T>(initial?: OperationResult<T>): WritableSignal<OperationResult<T>> {
//     const wrapped = initial ?? {
//         state:  'loading',
//         isLoading: true,
//     } satisfies OperationResult<T>;
//     return signal<OperationResult<T>>(wrapped);
// }