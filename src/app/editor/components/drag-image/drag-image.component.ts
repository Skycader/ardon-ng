import { Component, EventEmitter, Input } from '@angular/core';
import {
  EditBlockImageInterface,
  EditBlockType,
} from '../../models/editorComponent.interface';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';

@Component({
  selector: 'ardon-drag-image',
  templateUrl: './drag-image.component.html',
  styleUrl: './drag-image.component.scss',
})
export class DragImageComponent {
  @Input() item: EditBlockImageInterface = {
    title: '',
    type: 'image',
    icon: 'photo',
    content: {
      imageSrc: '',
      imageTitle: '',
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public fillUrl() {
    this.item.content.imageSrc =
      'https://static.vecteezy.com/system/resources/previews/001/416/673/original/angular-emblem-white-letter-on-red-vector.jpg';
    for (let i = 0; i < 2; i++) this.detectChanges.emit(1);
  }
}
