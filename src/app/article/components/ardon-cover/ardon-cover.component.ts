import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-cover',
  templateUrl: './ardon-cover.component.html',
  styleUrl: './ardon-cover.component.scss',
})
export class ArdonCoverComponent {
  @Input() imageSrc: string = '';
}
