import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EditBlockType } from '../models/editorComponent.interface';
import { AvailableComponents } from './availableComponents.class';
import { EditorService } from './editor.service';

@Injectable({
  providedIn: 'root',
})
export class DragListService {
  public availableComponents: AvailableComponents = new AvailableComponents();
  public availableComponents$ = new BehaviorSubject<EditBlockType[]>(
    this.availableComponents.components
  );
  constructor(private editorService: EditorService) {}

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
    this.availableComponents$.next(this.availableComponents.components);
    this.editorService.updateArticle();
  }
}
