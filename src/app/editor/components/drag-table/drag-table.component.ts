import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input } from '@angular/core';
import { BehaviorSubject, delay, tap } from 'rxjs';
import {
  EditBlockTableInterface,
  EditBlockType,
} from '../../models/editorComponent.interface';
import { DragListService } from '../../services/drag-list.service';
import { DynemicDragService } from '../../services/dynemic-drag.service';

@Component({
  selector: 'ardon-drag-table',
  templateUrl: './drag-table.component.html',
  styleUrl: './drag-table.component.scss',
})
export class DragTableComponent {
  @Input() item: EditBlockTableInterface = {
    title: 'Таблица',
    type: 'table',
    icon: 'table_chart',
    content: {
      table: {
        columns: [],
        rows: [],
      },
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
  public tablelIdColumns: string = '';
  public tablelIdRows: string = '';

  public tableColumns$ = new BehaviorSubject<EditBlockType[]>([]);
  public tableRows$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(
    private dragList: DragListService,
    private dynemicDrag: DynemicDragService
  ) {}

  public rows: any = {};
  public createRow(row: any) {
    let obj = {
      icon: 'assigmnemt',
      type: 'text',
      title: 'Текст',
      content: {
        value: '',
      },
    };
    this.rows[row] = obj;
    return obj;
  }

  isTextPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'text';
  }
  public dropItem(item: any) {
    this.detectChanges.emit(1);
    this.updateTable();
    this.dragList.drop(item);
  }

  public update$ = this.dragList.dropEvent.pipe(
    delay(0),
    tap(() => {
      this.updateTable();
      this.detectChanges.emit(1);
    })
  );

  ngOnInit() {
    this.tablelIdColumns = this.dynemicDrag.generateId('table');
    this.tablelIdRows = this.dynemicDrag.generateId('table');
    this.detectChanges.subscribe(() => this.updateTable());
    this.importTable();
  }

  importTable() {
    const result: any = this.item.content.table.columns.map((column: any) => {
      return {
        icon: 'more_horiz',
        title: 'Ряд',
        type: 'table',
        content: {
          table: {
            columns: [],
            rows: [],
          },
        },
      };
    });
    // this.tableComponents$.next(result);
  }

  updateTable() {}

  ngOnDestroy() {
    this.dynemicDrag.removeId(this.tablelIdColumns);
    this.dynemicDrag.removeId(this.tablelIdRows);
  }
}
