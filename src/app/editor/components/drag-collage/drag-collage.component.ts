import { Component, EventEmitter, Input } from '@angular/core';
import {
  EditBlockCollageInterface,
  EditBlockType,
} from '../../models/editorComponent.interface';
import { BehaviorSubject, delay, tap } from 'rxjs';
import { DragListService } from '../../services/drag-list.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ardon-drag-collage',
  templateUrl: './drag-collage.component.html',
  styleUrl: './drag-collage.component.scss',
})
export class DragCollageComponent {
  @Input() item: EditBlockCollageInterface = {
    title: '',
    type: 'collage',
    icon: 'view-carousel',
    content: {
      photos: [],
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
  public carouselId: string = '';
  public collageComponents$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(
    private dragList: DragListService,
    private dynemicDrag: DynemicDragService,
  ) { }

  isPhotoPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'image';
  }
  public dropItem(item: any) {
    this.detectChanges.emit(1);
    this.updateSlides();
    this.dragList.drop(item);
  }

  public update$ = this.dragList.dropEvent.pipe(
    delay(0),
    tap(() => {
      this.updateSlides();
      this.detectChanges.emit(1);
    }),
  );

  ngOnInit() {
    this.carouselId = this.dynemicDrag.generateId('collage');
    this.detectChanges.subscribe(() => this.updateSlides());
    this.importSlides();
  }

  importSlides() {
    const result: any = this.item.content.photos.map((slide: any) => {
      return {
        icon: 'photo',
        title: 'Image',
        type: 'image',
        content: {
          imageSrc: slide.imageSrc,
          imageTitle: slide.imageTitle,
        },
      };
    });
    this.collageComponents$.next(result);
  }

  updateSlides() {
    this.item.content.photos = [];
    this.collageComponents$
      .getValue()
      .forEach((item: any) => this.item.content.photos.push(item.content));
  }

  ngOnDestroy() {
    this.dynemicDrag.removeId(this.carouselId);
  }
}
