import { Component, HostBinding, Input } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  @Input() article: ArdonArticleInterface = {
    heading: 'Artile heading',
    subheader: '',
    coverImageSrc: '',
    themeImageSrc: '',
    blocks: [],
  };

  @Input() displayConfig: any = {
    title: true,
    theme: true,
    content: true,
  };

  @HostBinding('class.grabbing') grabbing: boolean = false;

  constructor(public editorService: EditorService) { }

  ngOnInit() {
    this.editorService.article = this.article;
  }
}
