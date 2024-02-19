import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArdonArticleInterface } from '../../article/models/article.interface';
import { EditBlockType } from '../models/editorComponent.interface';
import { RenderDictionaryInterface } from '../models/renderDictionary.interface';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  public isPreview$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public article: ArdonArticleInterface = {
    heading: 'Artile heading',
    themeImageSrc: '',
    blocks: [],
  };

  public articlePreview: EditBlockType[] = [];

  public renderDictionary: RenderDictionaryInterface = {
    text: (item: EditBlockType) =>
      item.type === 'text'
        ? Object.create({
            type: 'text',
            content: { paragraphs: item.content.value.split('\n') },
          })
        : null,
    subheading: (item: EditBlockType) =>
      item.type === 'subheading'
        ? Object.create({
            type: 'subheading',
            content: item.content,
          })
        : null,
    image: (item: EditBlockType) =>
      item.type === 'image'
        ? Object.create({
            type: 'image',
            content: {
              imageSrc: item.content.imageSrc,
              imageTitle: item.content.imageTitle,
            },
          })
        : null,
  };

  constructor() {}

  public updateArticle() {
    this.article.blocks = this.articlePreview.map((item: EditBlockType) => {
      return this.renderDictionary[item.type](item);
    });
  }
}
