import { Component, Input } from '@angular/core';
import { ArdonArticleBlockInterface } from '../../models/article.interface';

interface Accordion {
  title: string;
  blocks: ArdonArticleBlockInterface[];
}
@Component({
  selector: 'ardon-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() item: Accordion = {
    title: '',
    blocks: [],
  };
  panelOpenState = true;
}
