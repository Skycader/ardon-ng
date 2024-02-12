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

  ngOnInit() {
    this.currentAvailableComponents = [...this.availableComponentsLibrary];
  }
  public availableComponentsLibrary: any = [
    {
      icon: 'dehaze',
      type: 'text',
      title: 'Text',
    },
    {
      icon: 'photo',
      type: 'image',
      title: 'Image',
    },
  ];

  public currentAvailableComponents: any[] = [];

  public articlePreview: any[] = [];

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
      this.currentAvailableComponents = [...this.availableComponentsLibrary];
    }
  }

  public inputEvent(event: any, item: any) {
    console.log(event);
    let i = this.articlePreview.find((i: any) => i === item);
    i.value = event.target.innerHTML;
  }
}
