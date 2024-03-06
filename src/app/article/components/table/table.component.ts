import { Component, Input } from '@angular/core';

const ELEMENT_DATA = [{ номер: 1, продукт: 'Яблоко' }];
@Component({
  selector: 'ardon-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() item: any = [
    ['#', 'Продукт', 'Цена'],
    ['1', 'Яблоко', '40 рублей'],
    ['2', 'Апельсин', '20 рублей'],
  ];

  dataSource: any;
  matrixToObject(matrix: any[][]): object[] {
    const keys: string[] = matrix[0];
    const result: object[] = [];

    for (let i = 1; i < matrix.length; i++) {
      const obj: { [key: string]: any } = {};
      for (let j = 0; j < keys.length; j++) {
        obj[keys[j]] = matrix[i][j];
      }
      result.push(obj);
    }

    return result;
  }

  ngOnInit() {
    console.log(this);
    this.dataSource = this.matrixToObject(this.item);
  }
}
