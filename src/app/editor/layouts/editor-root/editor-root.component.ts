import { Component } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-editor-root',
  templateUrl: './editor-root.component.html',
  styleUrl: './editor-root.component.scss',
})
export class EditorRootComponent {
  public tabSelect$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public articleExample: ArdonArticleInterface = {
    heading: 'Article example',
    themeImageSrc: 'https://getwallpapers.com/wallpaper/full/4/7/2/639528.jpg',
    blocks: [],
  };

  constructor(public editorService: EditorService) {}
}
