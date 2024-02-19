import { Component } from '@angular/core';

@Component({
  selector: 'ardon-drag-handle',
  templateUrl: './drag-handle.component.html',
  styleUrl: './drag-handle.component.scss',
})
export class DragHandleComponent {
  public preventDrag: boolean = true;
}
