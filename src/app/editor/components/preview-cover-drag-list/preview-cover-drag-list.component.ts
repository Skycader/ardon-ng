import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { EditorService } from '../../services/editor.service';
@Component({
  selector: 'ardon-preview-cover-drag-list',
  templateUrl: './preview-cover-drag-list.component.html',
  styleUrl: './preview-cover-drag-list.component.scss',
})
export class PreviewCoverDragListComponent {
  constructor(
    public editorService: EditorService,
    public dragList: DragListService
  ) {}

  isPhotoPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'image';
  }

  dropItem(item: any) {
    this.dragList.drop(item);
    this.editorService.updateArticle();
  }
}
