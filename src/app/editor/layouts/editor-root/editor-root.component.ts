import { Component } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';

@Component({
  selector: 'ardon-editor-root',
  templateUrl: './editor-root.component.html',
  styleUrl: './editor-root.component.scss',
})
export class EditorRootComponent {
  public articleExample: ArdonArticleInterface = {
    heading: 'Article example',
    themeImageSrc: 'https://getwallpapers.com/wallpaper/full/4/7/2/639528.jpg',
    blocks: [],
  };
}
