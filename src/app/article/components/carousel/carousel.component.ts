import { Component, Input } from '@angular/core';

import $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PhotoViewerService } from '../../services/photo-viewer.service';

interface $ {
  ownCarousel: any;
}
@Component({
  selector: 'ardon-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() slides: string[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['⬅️', '➡️'],
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
    nav: true,
  };

  constructor(public photoViewer: PhotoViewerService) { }
}
