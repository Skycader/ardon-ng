import { Component } from '@angular/core';
import { CardConfigInterface } from '../../../ardon-common/models/cardConfig.interface';

@Component({
  selector: 'ardon-advantages',
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
  public articles: CardConfigInterface[] = [
    {
      head: 'Angular 17',
      subhead: "What's new",
      description: 'Find out the top 5 new features',
      background:
        'https://angularexperts.imgix.net/products/ebook-signals/product-list-thumbnail.webp?auto=format',
      avatar:
        'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj',
      buttons: [
        {
          icon: ' import_contacts',
          text: 'Read',
          destination: ['/article', 'angular17'],
        },
        {
          icon: 'thumb_up',
          text: 'Like',
        },
      ],
    },
    {
      head: 'Angular 17',
      subhead: "What's new",
      description: 'Find out the top 5 new features',
      background:
        'https://angularexperts.imgix.net/products/ebook-signals/product-list-thumbnail.webp?auto=format',
      avatar:
        'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj',
      buttons: [
        {
          icon: ' import_contacts',
          text: 'Read',
        },
        {
          icon: 'thumb_up',
          text: 'Like',
        },
      ],
    },
    {
      head: 'Angular 17',
      subhead: "What's new",
      description: 'Find out the top 5 new features',
      background:
        'https://angularexperts.imgix.net/products/ebook-signals/product-list-thumbnail.webp?auto=format',
      avatar:
        'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj',
      buttons: [
        {
          icon: ' import_contacts',
          text: 'Read',
        },
        {
          icon: 'thumb_up',
          text: 'Like',
        },
      ],
    },
  ];
}
