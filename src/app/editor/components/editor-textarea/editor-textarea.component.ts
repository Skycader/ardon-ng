import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ardon-editor-textarea',
  templateUrl: './editor-textarea.component.html',
  styleUrl: './editor-textarea.component.scss',
})
export class EditorTextareaComponent {
  @Input() item!: EditBlockType;
  @Output() detectChanges = new EventEmitter();

  public availableComponents$: BehaviorSubject<EditBlockType[]> =
    this.dragList.availableComponents$;

  constructor(private dragList: DragListService) { }

  public dropItem(item: any) {
    this.dragList.drop(item);
  }
}
