import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {
  ArdonArticleBlockInterface,
  ArdonArticleInterface,
} from '../../article/models/article.interface';
import { EditBlockType } from '../models/editorComponent.interface';
import { RenderDictionaryInterface } from '../models/renderDictionary.interface';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  public isPreview$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public found: boolean = true;

  public article: ArdonArticleInterface = {
    heading: 'New article',
    coverImageSrc: '',
    themeImageSrc: '',
    blocks: [],
  };

  public articlePreview: EditBlockType[] = [];
  public themeBox: EditBlockType[] = [];
  public coverBox: EditBlockType[] = [];

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

    collage: (item: EditBlockType) =>
      item.type === 'collage'
        ? {
            type: 'collage',
            content: {
              photos: item.content.photos,
            },
          }
        : null,

    list: (item: EditBlockType) =>
      item.type === 'list'
        ? {
            type: 'list',
            content: {
              items: item.content.value?.split('\n'),
            },
          }
        : null,
  };

  public renderDictionary2: RenderDictionaryInterface = {
    text: (item: ArdonArticleBlockInterface) =>
      item.type === 'text'
        ? {
            icon: 'assignment',
            title: 'Текст',
            type: 'text',
            content: { value: item.content.paragraphs?.join('\n') },
          }
        : null,
    subheading: (item: ArdonArticleBlockInterface) =>
      item.type === 'subheading'
        ? {
            icon: 'class',
            title: 'Заголовок',
            type: 'subheading',
            content: { title: item.content.title },
          }
        : null,
    list: (item: ArdonArticleBlockInterface) =>
      item.type === 'list'
        ? {
            icon: 'list',
            title: 'Список',
            type: 'list',
            content: { value: item.content.items.join('\n') },
          }
        : null,

    collage: (item: ArdonArticleBlockInterface) =>
      item.type === 'collage'
        ? {
            icon: 'dashboard',
            title: 'Коллаж',
            type: 'collage',
            content: { photos: item.content.photos },
          }
        : null,

    image: (item: ArdonArticleBlockInterface) =>
      item.type === 'image'
        ? {
            icon: 'photo',
            title: 'Фото',
            type: 'image',
            content: {
              imageSrc: item.content.imageSrc,
              imageTitle: item.content.imageTitle,
            },
          }
        : null,
    carousel: (item: ArdonArticleBlockInterface) =>
      item.type === 'carousel'
        ? {
            icon: 'view_carousel',
            title: 'Карусель',
            type: 'carousel',
            content: {
              title: '',
              slides: item.content.slides,
            },
          }
        : null,
  };

  constructor(private http: HttpClient, private router: Router) {
    const articleName = this.router.url.split('/')[2];
    this.downloadArticle(articleName).subscribe((article: any) => {
      this.article.heading = article.heading;
      this.article.themeImageSrc = article.themeImageSrc;
      this.article.blocks = article.blocks;
      this.article.blocks = this.article.blocks.filter((block: any) =>
        Object.keys(this.renderDictionary2).includes(block.type)
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
        title: 'Фото',
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
        this.renderDictionary2[block.type](block)
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

    if (this.coverBox.length > 0 && this.coverBox[0].type === 'image') {
      this.article.coverImageSrc = this.coverBox[0].content.imageSrc;
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
