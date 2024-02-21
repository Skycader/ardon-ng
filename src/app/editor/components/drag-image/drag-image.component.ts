import { Component, EventEmitter, Input } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';

@Component({
  selector: 'ardon-drag-image',
  templateUrl: './drag-image.component.html',
  styleUrl: './drag-image.component.scss',
})
export class DragImageComponent {
  @Input() item: EditBlockType = {
    title: '',
    type: 'image',
    icon: 'photo',
    content: {
      imageSrc: '',
      imageTitle: '',
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
}
