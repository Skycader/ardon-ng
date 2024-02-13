import { Component, Input } from '@angular/core';
import { ArdonContentType } from '../../models/article.interface';

@Component({
  selector: 'ardon-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() content: ArdonContentType<'image'> = {
    imageSrc: '',
    imageTitle: '',
  };
}
