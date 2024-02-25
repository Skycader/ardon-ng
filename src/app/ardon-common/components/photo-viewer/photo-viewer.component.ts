import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { PhotoViewerService } from '../../services/photo-viewer.service';
import $ from 'jquery';
import Panzoom from '@panzoom/panzoom';
@Component({
  selector: 'ardon-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrl: './photo-viewer.component.scss',
})
export class PhotoViewerComponent {
  public panzoom: any;
  @ViewChild('world') world!: ElementRef;

  public stopPropagation(event: any) {
    event.stopPropagation();
  }
  zoom() {
    this.panzoom.pan(0, 0, { animate: true });
    this.panzoom.zoom(2, { animate: true });

    var w = $('.container').width();
    var h = $('.container').height();
    console.log(w, h);
  }
  initPanzoom() {
    const elem: any = this.world.nativeElement;

    const elementIsVisibleInViewport = (el: any, partiallyVisible = false) => {
      const { top, left, bottom, right } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) ||
          (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };

    this.panzoom = Panzoom(elem, {
      maxScale: 100,
      minScale: 0.5,
      center: 1,
      bounds: true,
      boundsPadding: 1,
      boundsDisabledForZoom: true,
    });

    document.querySelector('body')?.addEventListener('touchend', () => {
      this.panzoom.pause();
    });

    this.zoom();
    elem.parentElement.addEventListener('wheel', this.panzoom.zoomWithWheel);
    elem.addEventListener('panzoomend', (event: any) => {
      //   console.log(elementIsVisibleInViewport(this.world.nativeElement, true));
      // if (!elementIsVisibleInViewport(this.world.nativeElement)) this.zoom();
    });
  }

  @Input() imageUrl: string = '';
  public title: string = '';
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    this.closePhotoView();
  }

  public darkness: boolean = false;

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    const scroll = document.querySelector('.photo-viewer')!.scrollTop;
    if (scroll === 0) this.closePhotoView();
  }
  ngOnInit() {
    this.title = this.photoViewer.title;
  }
  public scrollCheck: ReturnType<typeof setInterval> | null = null;
  constructor(public photoViewer: PhotoViewerService) { }
  ngAfterViewInit() {
    this.initPanzoom();
    ///
    this.scrollCheck = setInterval(() => {
      this.onScroll();
    }, 1000);
    setTimeout(() => {
      this.darkness = true;
      document
        .querySelector('.photo-viewer')!
        .scrollTo({ top: 1000, behavior: 'smooth' });
    }, 100);
  }

  public closePhotoView() {
    this.darkness = false;
    document
      .querySelector('.photo-viewer')!
      .scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => this.photoViewer.close(), 380);
  }

  ngOnDestroy() {
    if (this.scrollCheck) clearInterval(this.scrollCheck);
  }
}
