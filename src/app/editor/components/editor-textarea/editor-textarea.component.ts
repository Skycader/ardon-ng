import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ardon-editor-textarea',
  templateUrl: './editor-textarea.component.html',
  styleUrl: './editor-textarea.component.scss',
})
export class EditorTextareaComponent {
  @Input() item: any;
  @Output() detectChanges = new EventEmitter();
}
