import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, map, of, switchMap, tap } from 'rxjs';
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
  public availableComponents$: BehaviorSubject<EditBlockType[]> =
    this.dragList.availableComponents$;

  public connectedTo: string[] = [];
  public subscription!: Subscription;
  constructor(
    public dragList: DragListService,
    public editorService: EditorService,
    private dynemicDrop: DynemicDragService,
  ) { }

  ngOnInit() {
    this.subscription = this.dragList.availableComponents$.subscribe(() => {
      setTimeout(() => this.updateList());
    });
  }

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
