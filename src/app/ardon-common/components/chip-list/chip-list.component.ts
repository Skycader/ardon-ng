import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrl: './chip-list.component.scss',
})
export class ChipListComponent {
  @Input() contents: any = [];
}
