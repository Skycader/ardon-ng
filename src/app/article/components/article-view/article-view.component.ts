import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'ardon-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
  public ngOnInit(): void {
    // window.scrollTo({ top: 0, behavior: 'instant' });

    this.articleService.article$.subscribe((res: any) => console.log(res));
  }

  constructor(public articleService: ArticleService) {}
}
