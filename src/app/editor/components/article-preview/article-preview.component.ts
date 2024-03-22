import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.scss',
})
export class ArticlePreviewComponent {
  @Input() article!: ArdonArticleInterface;
  public showPreview = true;
  public showBody = true;
  public folded = false;
  @ViewChild('previewArticle') previewArticle!: ElementRef;
  constructor(public editorService: EditorService) { }

  public foldPreview() {
    this.showBody = !this.showBody;
  }
  public minimizePreview() {
    this.folded = true;
    this.showPreview = false;
    setTimeout(() => (this.showPreview = true));
  }

  public refresh() {
    this.showPreview = false;
    this.folded = false;
    setTimeout(() => (this.showPreview = true));
  }

  public maximizePreview() {
    this.showBody = true;
    this.minimizePreview();
    this.folded = false;

    setTimeout(() => {
      this.previewArticle.nativeElement.style.width = '99vw';
      this.previewArticle.nativeElement.style.height = '99vh';
    });
  }

  public closePreview() {
    this.editorService.isPreview$.next(false);
  }
}
