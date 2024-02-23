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
    false,
  );

  public article: ArdonArticleInterface = {
    heading: 'New article',
    themeImageSrc: '',
    blocks: [],
  };

  public articlePreview: EditBlockType[] = [];
  public themeBox: EditBlockType[] = [];

  public renderDictionary: RenderDictionaryInterface = {
    text: (item: EditBlockType) =>
      item.type === 'text'
        ? {
          type: 'text',
          content: { paragraphs: item.content.value.split('\n') },
        }
        : null,
    subheading: (item: EditBlockType) =>
      item.type === 'subheading'
        ? {
          type: 'subheading',
          content: item.content,
        }
        : null,
    image: (item: EditBlockType) =>
      item.type === 'image'
        ? {
          type: 'image',
          content: {
            imageSrc: item.content.imageSrc,
            imageTitle: item.content.imageTitle,
          },
        }
        : null,
  };

  constructor() { }

  public updateArticle() {
    this.article.themeImageSrc = '';
    this.article.blocks = this.articlePreview.map((item: EditBlockType) => {
      return this.renderDictionary[item.type](item);
    });

    if (this.themeBox.length > 0 && this.themeBox[0].type === 'image') {
      this.article.themeImageSrc = this.themeBox[0].content.imageSrc;
    }
  }

  downloadObjectAsJson(exportObj: ArdonArticleInterface, exportName: string) {
    var dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', exportName + '.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
