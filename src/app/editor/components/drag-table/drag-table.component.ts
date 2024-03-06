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
      table: [
        ['#', 'Продукт', 'Цена'],
        ['1', 'Яблоко', '40 рублей'],
        ['2', 'Апельсин', '20 рублей'],
      ],
    },
  };
  @Input() detectChanges: EventEmitter<number> = new EventEmitter();
  public tablelIdColumns: string = '';
  public tablelIdRows: string = '';

  public tableColumns$ = new BehaviorSubject<EditBlockType[]>([]);
  public tableRows$ = new BehaviorSubject<EditBlockType[]>([]);

  constructor(
    private dragList: DragListService,
    private dynemicDrag: DynemicDragService,
  ) { }

  isTextPredicate(item: CdkDrag<EditBlockType>) {
    return item.data.type === 'text';
  }
  public dropItem(item: any) {
    this.detectChanges.emit(1);
    this.updateTable();
    this.dragList.drop(item);
    this.syncTable();
  }

  public update$ = this.dragList.dropEvent.pipe(
    delay(0),
    tap(() => {
      this.updateTable();
      this.detectChanges.emit(1);
    }),
  );

  ngOnInit() {
    this.tablelIdColumns = this.dynemicDrag.generateId('tableColumns');
    this.tablelIdRows = this.dynemicDrag.generateId('tableRows');
    this.detectChanges.subscribe(() => this.updateTable());
    this.importTable();
  }

  importTable() {
    let headers = this.item.content.table[0].map(
      (head: string) => new EditBlockText(head) as EditBlockType,
    );
    this.tableColumns$.next(headers);
  }

  updateTable() { }

  @ViewChild('table') table!: ElementRef;
  syncTable() {
    this.table.nativeElement
      .querySelectorAll('textarea')
      .forEach((textarea: any) => console.log(textarea.value));
  }

  ngOnDestroy() {
    this.dynemicDrag.removeId(this.tablelIdColumns);
    this.dynemicDrag.removeId(this.tablelIdRows);
  }
}
