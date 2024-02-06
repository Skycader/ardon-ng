import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, delay, of, switchMap } from 'rxjs';
import { environemnt } from '../../../environments/environment';
import { ArdonArticleInterface } from '../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public readonly articl2e$ = this.router.events.pipe(
    switchMap((event: any) =>
      of(event).pipe(
        switchMap((event: any) => of(event.routerEvent.url.split('/').at(-1))),
      ),
    ),
    switchMap((articleName: string) =>
      this.http.get(
        `${environemnt.apiUrl}/article/${articleName}.json?${Date.now()}`,
      ),
    ),
  );

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public getArticle(
    name: string,
  ): Observable<ArdonArticleInterface | null | any> {
    return this.http
      .get(`${environemnt.apiUrl}/article/${name}.json?${Date.now()}`)
      .pipe(
        delay(1000),
        catchError((error: any) => {
          console.log('ERROR:', error);
          return of(null);
        }),
      );
  }
}
