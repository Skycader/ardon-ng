import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingBarService {
  public get loading$() {
    return of(this._loading$.getValue());
  }
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );
  constructor() {}

  public showLoading() {
    this._loading$.next(true);
  }

  public hideLoading() {
    setTimeout(() => {
      this._loading$.next(false);
    }, 1000);
  }
}
