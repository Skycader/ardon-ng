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
    blocks: [
      {
        type: 'text',
        content: {
          paragraphs: ['This is an example article'],
        },
      },
      {
        type: 'subheading',
        content: {
          title: 'Subheading',
        },
      },
      {
        type: 'image',
        content: {
          imageSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
          imageTitle: 'Angular logo',
        },
      },
      {
        type: 'text',
        content: {
          paragraphs: ['More text'],
        },
      },
    ],
  };
}
