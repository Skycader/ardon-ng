import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoViewerService {
  public readonly isOpen$ = new BehaviorSubject(false);
  public src: string = '';
  constructor() { }

  public open(src: string) {
    this.src = src;
    this.isOpen$.next(true);
  }
  public close() {
    this.isOpen$.next(false);
  }
}
