import { Component } from '@angular/core';
import { Observable, Subject, delay, switchMap, tap } from 'rxjs';
import { EditBlockType } from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { EditorService } from '../../services/editor.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';

@Component({
  selector: 'ardon-available-components',
  templateUrl: './available-components.component.html',
  styleUrl: './available-components.component.scss',
})
export class AvailableComponentsComponent {
  public availableComponents$: Observable<EditBlockType[]> =
    this.dragList.availableComponents$.pipe(
      delay(0),
      tap(() => {
        this.updateList();
      }),
    );

  public connectedTo: string[] = [];
  constructor(
    public dragList: DragListService,
    public editorService: EditorService,
    private dynemicDrop: DynemicDragService,
  ) { }

  public dropItem(item: any) {
    this.dragList.drop(item);
  }

  public updateList(): void {
    this.connectedTo = [
      ...this.dynemicDrop.getIds(),
      'articleConstructor',
      'previewCover',
    ];
  }

  public downloadBlankArticle() {
    this.editorService.downloadObjectAsJson(
      this.editorService.article,
      this.editorService.article.heading,
    );
  }

  public read(event: any) {
    console.log(event);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      const article = JSON.parse(fileReader.result as string);
      this.editorService.importArticle(article);
      console.log(this.editorService.article);
    };
    fileReader.readAsText(event.target.files[0]);
  }
}
