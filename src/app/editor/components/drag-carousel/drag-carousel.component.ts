import { Component, Input } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';
import { BehaviorSubject } from 'rxjs';
import { DragListService } from '../../services/drag-list.service';

@Component({
  selector: 'ardon-drag-carousel',
  templateUrl: './drag-carousel.component.html',
  styleUrl: './drag-carousel.component.scss',
})
export class DragCarouselComponent {
  @Input() item!: EditBlockType;

  public carouselComponents$ = new BehaviorSubject<EditBlockType[]>([
    {
      title: 'Picture',
      type: 'image',
      icon: 'photo',
      content: {
        imageSrc: '',
        imageTitle: '',
      },
    },
    {
      title: 'Picture',
      type: 'image',
      icon: 'photo',
      content: {
        imageSrc: '',
        imageTitle: '',
      },
    },
  ]);

  constructor(private dragList: DragListService) { }

  public dropItem(item: any) {
    this.dragList.drop(item);
  }
}
