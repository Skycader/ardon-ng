import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ArticlePreviewInterface } from '../../../ardon-common/models/ardonConfig.interface';
import { ConfigService } from '../../../ardon-core/services/config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ardon-recent-articles',
  templateUrl: './recent-articles.component.html',
  styleUrl: './recent-articles.component.scss',
})
export class RecentArticlesComponent {
  public recentArticles$ = this.http
    .get<ArticlePreviewInterface[]>('topic/welcome.json')
    .pipe(map((response: any) => response.articles));

  constructor(
    public configService: ConfigService,
    private http: HttpClient,
  ) { }
}
