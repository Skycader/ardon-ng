import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  ArdonArticleBlockInterface,
  ArdonArticleInterface,
} from '../../article/models/article.interface';
import { EditBlockType } from '../models/editorComponent.interface';
import { RenderDictionaryInterface } from '../models/renderDictionary.interface';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';
import { Router } from '@angular/router';
import { AriaDescriber } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  public isPreview$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  public found: boolean = true;

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
          content: { paragraphs: item.content.value?.split('\n') },
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

    carousel: (item: EditBlockType) =>
      item.type === 'carousel'
        ? {
          type: 'carousel',
          content: {
            slides: item.content.slides,
          },
        }
        : null,
  };

  public renderDictionary2: RenderDictionaryInterface = {
    text: (item: ArdonArticleBlockInterface) =>
      item.type === 'text'
        ? {
          icon: 'assignment',
          title: 'Text',
          type: 'text',
          content: { value: item.content.paragraphs?.join('\n') },
        }
        : null,
  };

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    const articleName = this.router.url.split('/')[2];
    this.downloadArticle(articleName).subscribe((article: any) => {
      this.article.heading = article.heading;
      this.article.themeImageSrc = article.themeImageSrc;
      this.article.blocks = article.blocks;
      this.article.blocks = this.article.blocks.filter(
        (block: any) => block.type === 'text',
      );
      this.importArticle();
    });
  }

  public downloadArticle(name: string) {
    return this.http.get('article/' + name + '.json');
  }

  public importArticle() {
    if (this.article.themeImageSrc) {
      this.themeBox[0] = {
        title: 'Image',
        icon: 'photo',
        type: 'image',
        content: {
          imageSrc: this.article.themeImageSrc,
          imageTitle: '',
        },
      };
    }
    this.articlePreview = this.article.blocks.map(
      (block: ArdonArticleBlockInterface) =>
        this.renderDictionary2[block.type](block),
    );
  }

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
