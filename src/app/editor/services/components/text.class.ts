import { ArdonArticleBlockInterface } from '../../../article/models/article.interface';
import { EditBlockClass } from './editBlock.class';

export class EditBlockTextClass extends EditBlockClass {
  constructor(public item: ArdonArticleBlockInterface) {
    super();
    if (this.item.type === 'text')
      this.content.value = this.item.content.paragraphs?.join('\n');
  }

  icon = 'assignment';
  title = 'Текст';
  type = 'text';
  content = { value: '' };
}
