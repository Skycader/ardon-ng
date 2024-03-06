import { CdkDrag } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, delay, tap } from 'rxjs';
import {
  EditBlockTableInterface,
  EditBlockType,
} from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';
import { EditBlockText } from '../../services/availableComponents.class';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-drag-table',
  templateUrl: './drag-table.component.html',
  styleUrl: './drag-table.component.scss',
})
export class DragTableComponent {
  @Input() item: EditBlockTableInterface = {
    title: 'Таблица',
    type: 'table',
    icon: 'table_chat',
    content: {
      table: [],
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
  public tablelIdColumns: string = '';
  public tablelIdRows: string = '';

  public tableColumns$ = new BehaviorSubject<EditBlockType[]>([]);
  public tableRows$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(
    private dragList: DragListService,
    private edit: EditorService,
    private dynemicDrag: DynemicDragService,
  ) { }

  isTextPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'text';
  }
  public dropItem(item: any) {
    this.syncTable();
    this.dragList.drop(item);

    setTimeout(() => {
      this.detectChanges.emit(1);
      this.syncTable();
    });
    setTimeout(() => {
      this.detectChanges.emit(1);
    }, 200);
  }

  public update$ = this.dragList.dropEvent.pipe(
    delay(0),
    tap(() => {
      this.detectChanges.emit(1);
    }),
  );

  ngOnInit() {
    this.tablelIdColumns = this.dynemicDrag.generateId('tableColumns');
    this.tablelIdRows = this.dynemicDrag.generateId('tableRows');
    this.importTable();
  }

  importTable() {
    console.log('this', this);
    let headers = this.item.content.table[0].map(
      (head: string) => new EditBlockText(head) as EditBlockType,
    );
    this.tableColumns$.next(headers);
  }

  @ViewChild('table') table!: ElementRef;
  syncTable() {
    let textareas = this.table.nativeElement.querySelectorAll('textarea');

    let objs: any = [];

    let rowSize = this.tableColumns$.getValue().length;

    let index = 0;
    let obj = [];
    for (let textarea of textareas) {
      obj.push(textarea.value);
      index++;
      if (index === rowSize) {
        objs.push(obj);
        obj = [];
        index = 0;
      }
    }

    this.item.content.table = [['Номер', 'Продукт'], ...objs];
    this.detectChanges.next(1);
    this.edit.updateArticle();
  }

  ngOnDestroy() {
    this.dynemicDrag.removeId(this.tablelIdColumns);
    this.dynemicDrag.removeId(this.tablelIdRows);
  }
}
