import { EditBlockType } from '../models/editorComponent.interface';

export class EditBlockText {
  icon = 'assignment';
  type = 'text';
  title = 'Текст';
  content = {
    value: '',
  };

  constructor(public value: string) {
    this.content.value = value;
  }
}

export class AvailableComponents {
  public get components(): EditBlockType[] {
    return [
      {
        icon: 'assignment',
        type: 'text',
        title: 'Текст',
        content: {
          value: '',
        },
      },
      {
        icon: 'class',
        type: 'subheading',
        title: 'Заголовок',
        content: {
          title: '',
        },
      },
      {
        icon: 'photo',
        type: 'image',
        title: 'Фото',
        content: {
          imageTitle: '',
          imageSrc: '',
        },
      },
      {
        icon: 'list',
        type: 'list',
        title: 'Список',
        content: {
          value: '',
        },
      },
      {
        icon: 'dashboard',
        type: 'collage',
        title: 'Коллаж',
        content: {
          photos: [],
        },
      },
      {
        icon: 'view_carousel',
        type: 'carousel',
        title: 'Карусель',
        content: {
          slides: [],
        },
      },
      {
        icon: 'table_chart',
        type: 'table',
        title: 'Таблица',
        content: {
          table: [],
        },
      },
    ];
  }
}
