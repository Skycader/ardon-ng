import { Component, Input } from '@angular/core';
import { ArdonArticleBlockInterface } from '../../models/article.interface';

interface Accordion {
  blocks: ArdonArticleBlockInterface[];
}
@Component({
  selector: 'ardon-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() item: Accordion = {
    blocks: [],
  };
  panelOpenState = true;
}
