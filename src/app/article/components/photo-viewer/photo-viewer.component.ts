import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { PhotoViewerService } from '../../services/photo-viewer.service';

@Component({
  selector: 'ardon-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrl: './photo-viewer.component.scss',
})
export class PhotoViewerComponent {
  @Input() imageUrl: string = '';

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    this.closePhotoView();
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    const scroll = document.querySelector('.photo-viewer')!.scrollTop;
    if (scroll === 0) this.closePhotoView();
  }

  public scrollCheck: any = null;
  constructor(public photoViewer: PhotoViewerService) { }
  ngAfterViewInit() {
    this.scrollCheck = setInterval(() => {
      this.onScroll();
    }, 100);
    document
      .querySelector('.photo-viewer')!
      .scrollTo({ top: 1000, behavior: 'smooth' });
  }

  public closePhotoView() {
    document
      .querySelector('.photo-viewer')!
      .scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => this.photoViewer.close(), 300);
  }

  ngOnDestroy() {
    clearInterval(this.scrollCheck);
  }
}
