import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EditBlockType } from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-editor-textarea',
  templateUrl: './editor-textarea.component.html',
  styleUrl: './editor-textarea.component.scss',
})
export class EditorTextareaComponent {
  @Input() item!: EditBlockType;
  @Output() detectChanges = new EventEmitter();

  @ViewChild('text') text!: ElementRef;
  public availableComponents$: BehaviorSubject<EditBlockType[]> =
    this.dragList.availableComponents$;

  constructor(
    private dragList: DragListService,
    private editor: EditorService
  ) {}

  public dropItem(item: CdkDragDrop<EditBlockType[]>) {
    this.dragList.drop(item);
  }
}
