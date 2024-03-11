import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import Panzoom from '@panzoom/panzoom';
import { PhotoViewerService } from '../../services/photo-viewer.service';
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
    this.panzoom.zoom(2, { animate: true });
    this.panzoom.pan(0, 0, { animate: true });
  }

  initPanzoom() {
    const elem: any = this.world.nativeElement;

    this.panzoom = Panzoom(elem, {
      maxScale: 10,
      minScale: 1,
      bounds: true,
      boundsPadding: 1000,
    });

    setTimeout(() => {
      this.zoom();
    });
    elem.parentElement.addEventListener('wheel', this.panzoom.zoomWithWheel);
  }

  @Input() imageUrl: string = '';
  @Input() iframeUrl: string = '';
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
  constructor(public photoViewer: PhotoViewerService) {}
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
