import { Component, Input } from '@angular/core';

export interface ImageConfigInterface {
  imgSrc: string;
  imgTitle: string;
}
@Component({
  selector: 'ardon-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() content: ImageConfigInterface = {
    imgSrc: '',
    imgTitle: '',
  };
}
