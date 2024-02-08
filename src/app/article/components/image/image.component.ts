import { Component, Input } from '@angular/core';

export interface ImageConfigInterface {
  imageSrc: string;
  imageTitle: string;
}
@Component({
  selector: 'ardon-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() imageConfig: ImageConfigInterface = {
    imageSrc: '',
    imageTitle: '',
  };
}
