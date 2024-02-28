import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, delay, of, switchMap, tap } from 'rxjs';
import { LoadingBarService } from '../../../ardon-common/services/loading-bar.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResolver implements Resolve<string> {
  constructor(private loadingBarService: LoadingBarService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    return of('123').pipe(
      tap(() => {
        this.loadingBarService.loading$.next(true);
      }),
      delay(1000),
      switchMap(() => of('some profile data')),
      tap(() => {
        this.loadingBarService.loading$.next(false);
      }),
    );
  }
}
