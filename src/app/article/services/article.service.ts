import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, delay, of } from 'rxjs';
import { environemnt } from '../../../environments/environment';
import { ArdonArticleInterface } from '../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient, private router: Router) {}

  public getArticle(
    name: string
  ): Observable<ArdonArticleInterface | null | any> {
    return this.http
      .get(`${environemnt.apiUrl}/article/${name}.json?${Date.now()}`)
      .pipe(
        delay(1000),
        catchError((error: any) => {
          return of(null);
        })
      );
  }
}
