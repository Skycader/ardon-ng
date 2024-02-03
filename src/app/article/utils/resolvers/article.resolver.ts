import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, switchMap, timer } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { ArdonArticleInterface } from '../../models/article.interface';

/*export const articleResolver: ResolveFn<string> = (route, state) => {
  return timer(1000).pipe(switchMap(() => this.));
}; */

@Injectable({ providedIn: 'root' })
export class articleResolver implements Resolve<ArdonArticleInterface> {
  constructor(private articleService: ArticleService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<ArdonArticleInterface> {
    return this.articleService.getArticle(route.params['id']);
  }
}
