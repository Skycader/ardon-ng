import { Component } from '@angular/core';

@Component({
  selector: 'ardon-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
  public ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
