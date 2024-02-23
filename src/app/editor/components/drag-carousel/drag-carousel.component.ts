import { Component, EventEmitter, Input } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';
import { BehaviorSubject } from 'rxjs';
import { DragListService } from '../../services/drag-list.service';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ardon-drag-carousel',
  templateUrl: './drag-carousel.component.html',
  styleUrl: './drag-carousel.component.scss',
})
export class DragCarouselComponent {
  @Input() item!: EditBlockType;
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();

  public carouselComponents$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(private dragList: DragListService) { }

  isPhotoPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'image';
  }
  public dropItem(item: any) {
    this.dragList.drop(item);
  }
}
