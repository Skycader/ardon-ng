import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LocalStorageService } from '../../ardon-core/services/local-storage.service';
import { VersionInterface } from '../../ardon-common/models/version.interface';
import { ArdonConfigInterface } from '../../ardon-common/models/ardonConfig.interface';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public get config() {
    return JSON.parse(this.localStorage.getItem('ardon-config') || '{}');
  }
  public readonly version$ = this.http
    .get<VersionInterface>('core/config/version/default.json')
    .pipe(
      map((response: VersionInterface) => {
        this.localStorage.setItem('ardon-version', response.version);
        return response.version;
      }),
    );

  public readonly needToUpdateConfig$ = this.version$.pipe(
    map(
      (version: string) =>
        version !== this.localStorage.getItem('ardon-version') ||
        this.localStorage.getItem('ardon-config') === null ||
        true,
    ),
  );

  public readonly configFromServer$ = this.http
    .get<ArdonConfigInterface>('core/config/default.json')
    .pipe(
      tap((ardonConfig: ArdonConfigInterface) => {
        this.localStorage.setItem('ardon-config', JSON.stringify(ardonConfig));
      }),
    );
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
  ) { }

  public config$ = this.needToUpdateConfig$.pipe(
    switchMap((needToUpdate: boolean) => {
      return needToUpdate
        ? this.configFromServer$
        : of(this.localStorageConfig$);
    }),
    catchError((error: HttpErrorResponse) => {
      console.warn('[WARNING] ARDON IS OFFLINE', error);
      const config = this.getConfigFromLocalStorage();
      return Object.keys(config).length > 0
        ? this.localStorageConfig$
        : of(null);
    }),
  );

  public localStorageConfig$ = of(this.getConfigFromLocalStorage());

  public getConfigFromLocalStorage() {
    const value = this.localStorage.getItem('ardon-config') || '{}';
    return JSON.parse(value);
  }
}
