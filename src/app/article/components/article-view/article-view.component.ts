import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';
import { ArdonArticleInterface } from '../../models/article.interface';
import { ArticleService } from '../../services/article.service';
import { Title } from '@angular/platform-browser';

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
    description: '',
    subheader: '',
    coverImageSrc: '',
    themeImageSrc: '',
    blocks: [],
  };

  @ViewChild('articleBody') articleBody: ElementRef = new ElementRef(
    'articleBody',
  );

  constructor(
    public articleService: ArticleService,
    public photoViewer: PhotoViewerService,
    public activatedRoute: ActivatedRoute,
    private titleService: Title,

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
      this.titleService.setTitle(this.article.heading);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    });
  }

  public renderBlockContent(content: any): any {
    return content;
  }
}
