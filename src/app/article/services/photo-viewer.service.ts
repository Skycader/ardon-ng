import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SlideInterface } from '../components/carousel/carousel.component';

@Injectable({
  providedIn: 'root',
})
export class PhotoViewerService {
  public readonly isOpen$ = new BehaviorSubject(false);
  public src: string = '';
  public title: string = '';
  constructor() {}

  public open(slide: SlideInterface) {
    this.src = slide.imgSrc;
    this.title = slide.title;
    this.isOpen$.next(true);
  }
  public close() {
    this.isOpen$.next(false);
  }
}
