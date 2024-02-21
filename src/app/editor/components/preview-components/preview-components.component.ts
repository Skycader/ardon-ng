import { Component } from '@angular/core';
import { DragListService } from '../../services/drag-list.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-preview-components',
  templateUrl: './preview-components.component.html',
  styleUrl: './preview-components.component.scss',
})
export class PreviewComponentsComponent {
  constructor(
    public editorService: EditorService,
    public dragList: DragListService
  ) {}

  public allowAll() {
    return true;
  }
}
