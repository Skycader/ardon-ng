import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EditBlockType } from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-available-components',
  templateUrl: './available-components.component.html',
  styleUrl: './available-components.component.scss',
})
export class AvailableComponentsComponent {
  public availableComponents$: BehaviorSubject<EditBlockType[]> =
    this.dragList.availableComponents$;

  constructor(
    public dragList: DragListService,
    public editorService: EditorService
  ) {}

  public dropItem(item: any) {
    this.dragList.drop(item);
  }
}
