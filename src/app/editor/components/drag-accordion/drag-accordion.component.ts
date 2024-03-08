import { Component, EventEmitter, Input } from '@angular/core';
import {
  EditBlockAccordionInterface,
  EditBlockCollageInterface,
  EditBlockType,
} from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { BehaviorSubject, delay, tap } from 'rxjs';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-drag-accordion',
  templateUrl: './drag-accordion.component.html',
  styleUrl: './drag-accordion.component.scss',
})
export class DragAccordionComponent {
  @Input() item: any = {
    title: '',
    type: 'accordion',
    icon: 'view-carousel',
    content: {
      blocks: [],
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
  public accordionlId: string = '';
  public accordionComponents$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(
    private dragList: DragListService,
    private dynemicDrag: DynemicDragService,
    public readonly editorService: EditorService,
  ) {}

  public dropItem(item: any) {
    this.detectChanges.emit(1);
    this.updateBlocks();
    this.dragList.drop(item);
  }

  public update$ = this.dragList.dropEvent.pipe(
    delay(0),
    tap(() => {
      this.updateBlocks();
      this.detectChanges.emit(1);
    }),
  );

  ngOnInit() {
    this.accordionlId = this.dynemicDrag.generateId('accordion');
    this.detectChanges.subscribe(() => this.updateBlocks());
    this.importBlocks();
  }

  importBlocks() {
    const result: any = this.item.content.blocks.map((slide: any) => {
      return {
        icon: 'photo',
        title: 'Image',
        type: 'block',
        content: {
          blocks: [],
        },
      };
    });
    this.accordionComponents$.next(result);
  }

  updateBlocks() {
    this.item.content.blocks = [];
    this.accordionComponents$
      .getValue()
      .forEach((item: any) => this.item.content.blocks.push(item));
  }

  ngOnDestroy() {
    this.dynemicDrag.removeId(this.accordionlId);
  }
}
