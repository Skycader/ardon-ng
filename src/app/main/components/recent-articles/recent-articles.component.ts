import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  ArdonConfigInterface,
  ArticlePreviewInterface,
} from '../../../ardon-common/models/ardonConfig.interface';
import { ConfigService } from '../../../ardon-core/services/config.service';

@Component({
  selector: 'ardon-recent-articles',
  templateUrl: './recent-articles.component.html',
  styleUrl: './recent-articles.component.scss',
})
export class RecentArticlesComponent {
  public recentArticles$: Observable<ArticlePreviewInterface[]> =
    this.configService.config$.pipe(
      map((config: ArdonConfigInterface) => config.welcomeTopics),
    );

  constructor(public configService: ConfigService) { }
}
