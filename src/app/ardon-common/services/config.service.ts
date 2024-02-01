import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environemnt } from '../../../environments/environment';
import { ArdonConfigInterface } from '../models/ardonConfig.interface';
import { VersionInterface } from '../models/version.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: ArdonConfigInterface | null = null;
  public readonly version$ = this.http
    .get<VersionInterface>(`${environemnt.apiUrl}/version.json`)
    .pipe(map((response: VersionInterface) => response.version));
  public readonly needToUpdateConfig$ = this.version$.pipe(
    map((version: string) => version !== localStorage.getItem('ardon-version'))
  );
  public readonly config$ = this.http.get<ArdonConfigInterface>(
    `${environemnt.apiUrl}/config.json?${Date.now()}`
  );
  constructor(private http: HttpClient) {}

  public applyConfig() {}
}
