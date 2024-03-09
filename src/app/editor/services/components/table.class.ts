import { EditBlockType } from '../../models/editBlockType.enum';
import { EditBlockTableInterface } from '../../models/editorComponent.interface';

export class EditBlockTable implements EditBlockTableInterface {
  title = 'Таблица';
  type = EditBlockType.table;
  icon = 'table_chat';
  content = {
    table: [],
  };
}
