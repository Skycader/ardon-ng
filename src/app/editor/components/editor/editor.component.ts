import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, HostBinding, Input } from '@angular/core';
import { ArdonArticleInterface } from '../../../article/models/article.interface';
import { RenderDictionaryInterface } from '../../models/renderDictionary.interface';
import { EditBlockType } from '../../models/editorComponent.interface';

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
  public get availableComponentsLibrary(): EditBlockType[] {
    return [
      {
        icon: 'assignment',
        type: 'text',
        title: 'Text',
        content: {
          value: '',
        },
      },
      {
        icon: 'photo',
        type: 'image',
        title: 'Image',
        content: {
          imageTitle: '',
          imageSrc: '',
        },
      },
    ];
  }

  public triggerSync() {
    this.updateArticle();
  }

  public renderDictionary: RenderDictionaryInterface = {
    text: (item: EditBlockType) =>
      item.type === 'text'
        ? Object.create({
            type: 'text',
            content: { paragraphs: item.content.value.split('\n') },
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

  public updateArticle() {
    this.article.blocks = this.articlePreview.map((item: EditBlockType) => {
      return this.renderDictionary[item.type](item);
    });
  }

  public currentAvailableComponents: EditBlockType[] = [];

  public articlePreview: EditBlockType[] = [];

  drop(event: CdkDragDrop<EditBlockType[]>) {
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
