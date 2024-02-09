import { Component, Input } from '@angular/core';
import { ArdonContentType } from '../../../article/models/article.interface';

interface ChipListInputInterface {
  chips: string[];
}

@Component({
  selector: 'ardon-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrl: './chip-list.component.scss',
})
export class ChipListComponent {
  @Input() content: ArdonContentType<ChipListInputInterface> = {
    chips: [],
  };
}
