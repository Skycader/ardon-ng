import { Component, Input } from '@angular/core';
import { ArdonArticleBlockInterface } from '../../models/article.interface';

@Component({
  selector: 'ardon-article-render',
  templateUrl: './article-render.component.html',
  styleUrl: './article-render.component.scss',
})
export class ArticleRenderComponent {
  @Input() blocks: ArdonArticleBlockInterface[] = [];
}
