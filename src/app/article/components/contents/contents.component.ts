import { Component, Input } from '@angular/core';
import { ArdonArticleBlockInterface } from '../../models/article.interface';

export interface Section {
  name: string;
  subname: string;
}
export interface Action {
  icon: string;
  name: string;
  count: number;
  description: string;
}
@Component({
  selector: 'ardon-contents',
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss',
})
export class ContentsComponent {
  @Input() blocks: ArdonArticleBlockInterface[] = [];
  chapters: Section[] = [];
  actions: Action[] = [
    {
      icon: 'favorite_border',
      name: 'Нравится',
      count: 0,
      description: 'поставили лайк',
    },
    {
      icon: 'comment',
      name: 'Комментарии',
      count: 0,
      description: 'оставили комментарий',
    },
  ];

  ngOnChanges() {
    this.chapters = this.blocks
      .filter((item: ArdonArticleBlockInterface) => item.type === 'subheading')
      .map((item: ArdonArticleBlockInterface) =>
        item.type === 'subheading'
          ? { name: item.content.title, subname: '' }
          : { name: '', subname: '' },
      );
  }

  public scrollTo(block: string) {
    document.getElementById(`${block}`)?.scrollIntoView();
  }

  public panelOpenStateContents = true;
  public panelOpenStateActions = true;
}
