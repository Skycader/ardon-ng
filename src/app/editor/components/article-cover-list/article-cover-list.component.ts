import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { EditBlockType } from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-article-cover-list',
  templateUrl: './article-cover-list.component.html',
  styleUrl: './article-cover-list.component.scss',
})
export class ArticleCoverListComponent {
  constructor(
    public editorService: EditorService,
    public dragList: DragListService,
  ) { }

  isPhotoPredicate(item: CdkDrag<EditBlockType>) {
    return (
      item.data.type === 'image' && this.editorService.coverBox.length === 0
    );
  }

  dropItem(item: any) {
    this.dragList.drop(item);
    this.editorService.updateArticle();
  }
}
