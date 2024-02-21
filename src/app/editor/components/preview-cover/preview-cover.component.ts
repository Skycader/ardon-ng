import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ardon-preview-cover',
  templateUrl: './preview-cover.component.html',
  styleUrl: './preview-cover.component.scss',
})
export class PreviewCoverComponent {
  @Input() theme: string = '';

  availableComponents$ = new BehaviorSubject([{}]);

  public drop(event: CdkDragDrop<any>) {
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
    // this.availableComponents$.next(this.availableComponents$);
  }
}
