import { Component, Input } from '@angular/core';

const ELEMENT_DATA = [{ номер: 1, продукт: 'Яблоко' }];
@Component({
  selector: 'ardon-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() item: any = {
    columns: ['номер', 'продукт'],
    rows: ['1', 'Яблоко'],
  };
  dataSource = ELEMENT_DATA;
}
