import { EditBlockTableInterface } from '../../models/editorComponent.interface';

export class EditBlockTable implements EditBlockTableInterface {
  title = 'Таблица';
  type = TableType.table;
  icon = 'table_chat';
  content = {
    table: [],
  };
}

export enum TableType {
  table = 'table',
}
