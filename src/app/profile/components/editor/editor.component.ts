import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ardon-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  public preventDrag: boolean = true;

  @HostBinding('class.grabbing') grabbing: boolean = false;

  public availableComponentsConst: any = [
    {
      icon: 'dehaze',
      title: 'Text',
    },
    {
      icon: 'photo',
      title: 'Image',
    },
  ];

  public availableComponents: any[] = [
    {
      icon: 'dehaze',
      title: 'Text',
    },
    {
      icon: 'photo',
      title: 'Image',
    },
  ];

  public articlePreview: any[] = [
    {
      icon: 'dehaze',
      value: '',
      title: 'Text',
    },
    {
      icon: 'photo',
      value: '',
      title: 'Image',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.availableComponents = [...this.availableComponentsConst];
    }
  }
}
