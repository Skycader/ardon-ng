import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardon-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() imageSrc: string = '';
}
