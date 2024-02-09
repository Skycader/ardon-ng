import { Component, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ArdonContentType } from '../../models/article.interface';
import { PhotoViewerService } from '../../services/photo-viewer.service';

export interface SliderInterface {
  title: string;
  sldies: SlideInterface[];
}

export interface SlideInterface {
  imgSrc: string;
  title: string;
}

@Component({
  selector: 'ardon-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() content: ArdonContentType<SliderInterface> = {};
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  constructor(public photoViewer: PhotoViewerService) {}

  public lastClick = 0;
  public doubleClick(slide: SlideInterface) {
    if (Date.now() - this.lastClick < 300) {
      this.photoViewer.open(slide);
    }
    this.lastClick = Date.now();
  }
}
