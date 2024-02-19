import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EditBlockType } from '../models/editorComponent.interface';
import { AvailableComponents } from './availableComponents.class';

@Injectable({
  providedIn: 'root',
})
export class DragListService {
  public availableComponents: AvailableComponents = new AvailableComponents();
  public availableComponents$ = new BehaviorSubject<EditBlockType[]>(
    this.availableComponents.componens
  );
  constructor() {}

  public drop(event: CdkDragDrop<EditBlockType[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.availableComponents$.next(this.availableComponents.componens);
  }
}
