import { Component, Input } from '@angular/core';
import { EditBlockTableInterface } from '../../../editor/models/editorComponent.interface';

const ELEMENT_DATA = [{ номер: 1, продукт: 'Яблоко' }];
@Component({
  selector: 'ardon-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() item: any = {
    table: [],
  };

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
    this.dataSource = this.matrixToObject(this.item.table);
    console.log(this);
  }
}
