import { Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import {
  ArdonConfigInterface,
  ArticlePreviewInterface,
} from '../../../ardon-common/models/ardonConfig.interface';
import { ConfigService } from '../../../ardon-core/services/config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ardon-article-search',
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss',
})
export class ArticleSearchComponent {
  public recentArticles$ = this.http
    .get<ArticlePreviewInterface[]>('topic/welcome.json')
    .pipe(map((response: any) => response.articles));

  public value = '';

  constructor(
    public configService: ConfigService,
    private http: HttpClient,
  ) { }
}
