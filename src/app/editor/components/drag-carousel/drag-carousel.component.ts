import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input } from '@angular/core';
import { BehaviorSubject, delay, tap } from 'rxjs';
import {
  EditBlockCarouselInterface,
  EditBlockType,
} from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';

@Component({
  selector: 'ardon-drag-carousel',
  templateUrl: './drag-carousel.component.html',
  styleUrl: './drag-carousel.component.scss',
})
export class DragCarouselComponent {
  @Input() item: EditBlockCarouselInterface = {
    title: '',
    type: 'carousel',
    icon: 'view-carousel',
    content: {
      slides: [],
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
  public carouselId: string = '';
  public carouselComponents$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(
    private dragList: DragListService,
    private dynemicDrag: DynemicDragService
  ) {}

  isPhotoPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'image';
  }
  public dropItem(item: any) {
    this.detectChanges.emit(1);
    this.updateSlides();
    this.dragList.drop(item);
  }

  public update$ = this.dragList.dropEvent.pipe(
    delay(10),
    tap(() => {
      this.updateSlides();
      this.detectChanges.emit(1);
    })
  );

  ngOnInit() {
    this.carouselId = this.dynemicDrag.generateId('carousel');
    this.detectChanges.subscribe(() => this.updateSlides());
    this.importSlides();
  }

  importSlides() {
    const result: any = this.item.content.slides.map((slide: any) => {
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
    this.carouselComponents$.next(result);
  }

  updateSlides() {
    this.item.content.slides = [];
    this.carouselComponents$
      .getValue()
      .forEach((item: any) => this.item.content.slides.push(item.content));
  }

  ngOnDestroy() {
    this.dynemicDrag.removeId(this.carouselId);
  }
}
