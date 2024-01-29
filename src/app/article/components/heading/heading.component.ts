import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() heading: string = '';
}
