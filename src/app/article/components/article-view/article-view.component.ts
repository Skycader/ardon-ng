import { Component, Input } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ArdonArticleInterface } from '../../models/article.interface';
import { PhotoViewerService } from '../../services/photo-viewer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ardon-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
  article: ArdonArticleInterface = {
    heading: '',
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
    this.activatedRoute.data.subscribe((res: any) => {
      console.log('RES:', res);
      if (res.article === 'ERROR') {
        this.found = false;
      }

      this.article = res.article;
    });
  }
}
