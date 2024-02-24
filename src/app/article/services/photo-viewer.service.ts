import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArdonSlideInterface } from '../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotoViewerService {
  public readonly isOpen$ = new BehaviorSubject(false);
  public src: string = '';
  public title: string = '';
  constructor() { }

  public open(slide: ArdonSlideInterface) {
    console.log('OPENING');
    this.src = slide.imageSrc;

    this.title = slide.imageTitle;
    this.isOpen$.next(true);
  }
  public close() {
    this.isOpen$.next(false);
  }
}
