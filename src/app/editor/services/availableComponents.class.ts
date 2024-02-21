import { EditBlockType } from '../models/editorComponent.interface';

export class AvailableComponents {
  public get components(): EditBlockType[] {
    return [
      {
        icon: 'assignment',
        type: 'text',
        title: 'Text',
        content: {
          value: '',
        },
      },
      {
        icon: 'class',
        type: 'subheading',
        title: 'Heading',
        content: {
          title: '',
        },
      },
      {
        icon: 'photo',
        type: 'image',
        title: 'Image',
        content: {
          imageTitle: '',
          imageSrc: '',
        },
      },
    ];
  }
}
