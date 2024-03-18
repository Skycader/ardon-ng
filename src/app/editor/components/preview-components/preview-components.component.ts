import { Component } from '@angular/core';
import { SnackbarService } from '../../../ardon-common/services/snackbar.service';
import { DragListService } from '../../services/drag-list.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';
import { EditorService } from '../../services/editor.service';
import { MarkUpService } from '../../services/mark-up.service';

@Component({
  selector: 'ardon-preview-components',
  templateUrl: './preview-components.component.html',
  styleUrl: './preview-components.component.scss',
})
export class PreviewComponentsComponent {
  constructor(
    public editorService: EditorService,
    public dragList: DragListService,
    public snackBar: SnackbarService,
    public markUp: MarkUpService,
    private dynemicDrop: DynemicDragService,
  ) {}

  public connectedTo: any = [];

  public updateList(): void {
    this.connectedTo = [
      'availableComponents',
      'previewCover',
      ...this.dynemicDrop.getIds(),
    ];
  }

  public allowAll() {
    return true;
  }

  public toggleBlock(event: any) {
    let container =
      event.target.parentElement.parentElement.parentElement.parentElement;

    if (container.classList.contains('blockIsExpanded')) {
      container.classList.remove('blockIsExpanded');
      container.classList.add('blockIsNotExpanded');
    } else {
      container.classList.remove('blockIsNotExpanded');
      container.classList.add('blockIsExpanded');
    }
  }
}
