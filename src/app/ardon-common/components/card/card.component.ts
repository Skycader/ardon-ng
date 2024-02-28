import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardConfigInterface } from '../../models/cardConfig.interface';

@Component({
  selector: 'ardon-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() config: CardConfigInterface = {
    title: 'Мощение дорожек и площадок',
    subheader: 'Услуга',
    avatarSrc: 'https://st3.stblizko.ru/images/product/343/360/457_big.jpg',
    backgroundSrc: 'https://i.imgur.com/HsoU7Cd.jpeg',

    description: '',
    buttons: [
      {
        icon: 'import_contacts',
        text: 'Читать',
        destination: ['/article', 'moshchenie-dorozhek'],
      },
      {
        icon: 'share',
        text: 'Поделиться',
      },
    ],
  };

  constructor(private router: Router) {}

  public goTo(route: string[] | undefined) {
    if (!route) return;
    this.router.navigate(route);
  }
}
