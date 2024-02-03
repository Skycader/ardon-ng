import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: string;
}
@Component({
  selector: 'ardon-contents',
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss',
})
export class ContentsComponent {
  folders: Section[] = [
    {
      name: 'Мощение дорожек и площадок',
      updated: 'Микро описание',
    },
  ];
  notes: Section[] = [
    {
      name: 'Примечание',
      updated: 'Микро описание',
    },
  ];
}
