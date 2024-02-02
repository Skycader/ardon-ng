import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() list: string[] = [];
}
