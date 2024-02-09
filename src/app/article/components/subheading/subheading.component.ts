import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-subheading',
  templateUrl: './subheading.component.html',
  styleUrl: './subheading.component.scss',
})
export class SubheadingComponent {
  @Input() content: any;
}
