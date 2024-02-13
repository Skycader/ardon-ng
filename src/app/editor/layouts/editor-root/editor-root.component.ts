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
    themeImageSrc:
      'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww',
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
         title: 'Subheading'
        },
      },
      {
        type: 'image',
        content: {
          imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
          imageTitle: 'Angular logo',
        },
      },
    ],
  };
}
