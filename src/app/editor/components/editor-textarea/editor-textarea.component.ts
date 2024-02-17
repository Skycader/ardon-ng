import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';

@Component({
  selector: 'ardon-editor-textarea',
  templateUrl: './editor-textarea.component.html',
  styleUrl: './editor-textarea.component.scss',
})
export class EditorTextareaComponent {
  @Input() item!: EditBlockType;
  @Output() detectChanges = new EventEmitter();
}
