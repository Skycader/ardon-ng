import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, delay, of, switchMap, tap } from 'rxjs';
import { LoadingBarService } from '../../../ardon-common/services/loading-bar.service';

@Injectable({
  providedIn: 'root',
})
export class MainResolver implements Resolve<string> {
  constructor(private loadingBarService: LoadingBarService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    return of('123').pipe(
      tap(() => {
        this.loadingBarService.showLoading();
      }),
      delay(0),
      switchMap(() => of('some profile data')),
      tap(() => {
        this.loadingBarService.hideLoading();
      }),
    );
  }
}
