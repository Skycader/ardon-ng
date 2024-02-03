import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, switchMap, tap } from 'rxjs';
import { environemnt } from '../../../environments/environment';
import { ArdonConfigInterface } from '../models/ardonConfig.interface';
import { VersionInterface } from '../models/version.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public readonly version$ = this.http
    .get<VersionInterface>(`${environemnt.apiUrl}/version.json?${Date.now()}`)
    .pipe(
      map((response: VersionInterface) => {
        localStorage.setItem('ardon-version', response.version);
        return response.version;
      }),
    );

  public readonly needToUpdateConfig$ = this.version$.pipe(
    map(
      (version: string) =>
        version !== localStorage.getItem('ardon-version') ||
        localStorage.getItem('ardon-config') === null,
    ),
  );

  public readonly configFromServer$ = this.http
    .get<ArdonConfigInterface>(
      `${environemnt.apiUrl}/config.json?${Date.now()}`,
    )
    .pipe(
      tap((ardonConfig: ArdonConfigInterface) => {
        localStorage.setItem('ardon-config', JSON.stringify(ardonConfig));
      }),
    );
  constructor(private http: HttpClient) { }

  public config$ = this.needToUpdateConfig$.pipe(
    switchMap((needToUpdate: boolean) => {
      return needToUpdate
        ? this.configFromServer$
        : of(this.getConfigFromLocalStorage());
    }),
  );

  public getConfigFromLocalStorage() {
    const value = localStorage.getItem('ardon-config') || '{}';
    return JSON.parse(value);
  }
}
