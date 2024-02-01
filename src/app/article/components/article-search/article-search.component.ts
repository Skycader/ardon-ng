import { Component } from '@angular/core';
import { CardConfigInterface } from '../../../ardon-common/models/cardConfig.interface';

@Component({
  selector: 'ardon-article-search',
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss',
})
export class ArticleSearchComponent {
  public value = '';
  public articles: CardConfigInterface[] = [];
}
