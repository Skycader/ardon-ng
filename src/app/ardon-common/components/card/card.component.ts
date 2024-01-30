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
    head: 'Empty heading',
    subhead: 'Empty subhead',
    avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    background: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz
    breeds of dog from Japan. A small, agile dog that copes very well with
    mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    buttons: [],
  };

  constructor(private router: Router) {}

  public goTo(route: string[] | undefined) {
    if (!route) return;
    this.router.navigate(route);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
