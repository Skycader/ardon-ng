import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  ButtonTypes,
  CardConfigInterface,
} from '../../../ardon-common/models/cardConfig.interface';
import { EditBlockType } from '../../models/editorComponent.interface';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-preview-cover',
  templateUrl: './preview-cover.component.html',
  styleUrl: './preview-cover.component.scss',
})
export class PreviewCoverComponent {
  @Input() theme: string = '';
  card: CardConfigInterface = {
    title: this.editor.article.heading,
    subheader: '',
    avatarSrc: '',
    backgroundSrc: '',
    description: '',
    buttons: [
      {
        icon: 'import_contacts',
        text: 'Читать',
        type: ButtonTypes.visit,
        destination: [],
      },
      {
        icon: 'share',
        type: ButtonTypes.share,
        text: 'Поделиться',
      },
    ],
  };

  public articleCardComponents: EditBlockType[] = [];

  availableComponents$ = new BehaviorSubject([{}]);

  constructor(private editor: EditorService) { }

  ngOnInit() {
    this.articleCardComponents = this.editor.articleCardComponents;
    this.editor.updateArticleEvent.subscribe(() => {
      this.updatePreview();
    });
  }

  public updatePreview() {
    this.card.title = this.editor.article.heading;

    if (this.articleCardComponents[0].type === 'text')
      this.card.subheader = this.articleCardComponents[0].content.value;

    if (this.articleCardComponents[1].type === 'image') {
      this.card.avatarSrc = this.articleCardComponents[1].content.imageSrc;
      this.card.backgroundSrc = this.articleCardComponents[1].content.imageSrc;
    }

    if (this.articleCardComponents[2].type === 'text')
      this.card.description = this.articleCardComponents[2].content.value;

    this.editor.article.subheader = this.card.subheader;
    this.editor.article.description = this.card.description;
    this.editor.article.coverImageSrc = this.card.avatarSrc;
  }
  public drop(event: CdkDragDrop<any>) {
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
    }
    // this.availableComponents$.next(this.availableComponents$);
  }
}
