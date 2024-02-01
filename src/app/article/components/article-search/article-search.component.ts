import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  ArdonConfigInterface,
  ArticlePreviewInterface,
} from '../../../ardon-common/models/ardonConfig.interface';
import { ConfigService } from '../../../ardon-common/services/config.service';

@Component({
  selector: 'ardon-article-search',
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss',
})
export class ArticleSearchComponent {
  public value = '';
  public recentArticles$: Observable<ArticlePreviewInterface[]> =
    this.configService.config$.pipe(
      map((config: ArdonConfigInterface) => config.welcomeTopics)
    );

  constructor(public configService: ConfigService) {}
}
