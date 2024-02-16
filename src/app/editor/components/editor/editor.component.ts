import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, HostBinding, Input } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';
import { RenderDictionaryInterface } from '../../models/renderDictionary.interface';

@Component({
  selector: 'ardon-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  @Input() article: ArdonArticleInterface = {
    heading: 'Artile heading',
    themeImageSrc: '',
    blocks: [],
  };

  @Input() displayConfig: any = {
    title: true,
    theme: true,
    content: true,
  };

  public preventDrag: boolean = true;

  @HostBinding('class.grabbing') grabbing: boolean = false;

  ngOnInit() {
    this.currentAvailableComponents = [...this.availableComponentsLibrary];
  }
  public get availableComponentsLibrary() {
    return [
      {
        icon: 'dehaze',
        type: 'text',
        value: '',
        title: 'Text',
      },
      {
        icon: 'photo',
        type: 'image',
        value: '',
        title: 'Image',
      },
    ];
  }

  public triggerSync() {
    this.updateArticle();
  }

  public renderDictionary: RenderDictionaryInterface = {
    text: (item: any) =>
      Object.create({
        type: 'text',
        content: { paragraphs: item.value.split('\n') },
      }),
    image: (item: any) =>
      Object.create({
        type: 'image',
        content: { imageSrc: item.imageSrc, imageTitle: item.imageTitle },
      }),
  };

  public updateArticle() {
    this.article.blocks = this.articlePreview.map((item: any) => {
      return this.renderDictionary[item.type](item);
    });
  }

  public currentAvailableComponents: any[] = [];

  public articlePreview: any[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.currentAvailableComponents = [...this.availableComponentsLibrary];
    }

    this.triggerSync();
  }
}
