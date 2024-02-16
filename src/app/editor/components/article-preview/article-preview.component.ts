import { Component, Input } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';

@Component({
  selector: 'ardon-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.scss',
})
export class ArticlePreviewComponent {
  @Input() article!: ArdonArticleInterface;
}
