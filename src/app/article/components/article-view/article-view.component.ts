import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';
import { ArdonArticleInterface } from '../../models/article.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'ardon-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
  @Input() displayConfig: any = {
    title: true,
    themeImage: true,
    content: true,
  };
  @Input() article: ArdonArticleInterface = {
    heading: '',
    subheader: '',
    coverImageSrc: '',
    themeImageSrc: '',
    blocks: [],
  };

  constructor(
    public articleService: ArticleService,
    public photoViewer: PhotoViewerService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  public found = true;

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      if (_.isEmpty(response)) return;
      if (response === null) return;
      if (response['article'] === null) {
        this.found = false;
      }

      this.article = response['article'];
    });
  }

  public renderBlockContent(content: any): any {
    return content;
  }
}
