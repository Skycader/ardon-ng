import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { environemnt } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public readonly article$ = this.router.events.pipe(
    switchMap((event: any) =>
      of(event).pipe(
        switchMap((event: any) => of(event.routerEvent.url.split('/').at(-1)))
      )
    ),
    switchMap((articleName: string) =>
      this.http.get(`${environemnt.apiUrl}/article/${articleName}.json`)
    )
  );
  constructor(private http: HttpClient, private router: Router) {}
}
