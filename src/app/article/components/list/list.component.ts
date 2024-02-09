import { Component, Input } from '@angular/core';
import { ArdonContentType } from '../../models/article.interface';

export interface ImageInterface {
  imgSrc: string;
  title: string;
}
@Component({
  selector: 'ardon-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() content: ArdonContentType<ImageInterface> = {
    imgSrc: '',
    title: '',
  };
}
