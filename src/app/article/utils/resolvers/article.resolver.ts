import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ArdonArticleInterface } from '../../models/article.interface';
import { ArticleService } from '../../services/article.service';

/*export const articleResolver: ResolveFn<string> = (route, state) => {
  return timer(1000).pipe(switchMap(() => this.));
}; */

@Injectable({ providedIn: 'root' })
export class articleResolver implements Resolve<ArdonArticleInterface> {
  constructor(private articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ArdonArticleInterface> {
    return this.articleService.getArticle(route.params['id']);
  }
}
