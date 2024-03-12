import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { LoadingBarService } from '../../ardon-common/services/loading-bar.service';
import { ArdonArticleInterface } from '../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingBarService: LoadingBarService,
  ) { }

  public getArticle(
    name: string,
  ): Observable<ArdonArticleInterface | null | any> {
    return this.http.get(`article/${name}.json?${Date.now()}`).pipe(
      tap(() => {
        this.loadingBarService.loading$.next(true);
      }),
      delay(1000),
      catchError((error: any) => {
        return of(null);
      }),
      tap(() => {
        this.loadingBarService.loading$.next(false);
      }),
    );
  }
}
