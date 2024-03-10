import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  ButtonTypes,
  CardConfigInterface,
} from '../../models/cardConfig.interface';
import { SnackbarService } from '../../services/snackbar.service';

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
        type: ButtonTypes.visit,
        destination: ['/article', 'moshchenie-dorozhek'],
      },
      {
        icon: 'share',
        type: ButtonTypes.share,
        text: 'Поделиться',
      },
    ],
  };

  constructor(
    private router: Router,
    private snackBar: SnackbarService,
  ) { }

  public goTo(route: string[] | undefined) {
    if (!route) return;
    this.router.navigate(route);
  }

  public shareLink(link: string[] | undefined) {
    if (!link) return;
    const url = location.host + link.join('/');
    this.snackBar.inform('Ссылка скопирована!');
    navigator.clipboard.writeText(url);
  }
}
