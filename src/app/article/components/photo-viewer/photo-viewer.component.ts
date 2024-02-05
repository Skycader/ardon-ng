import { Component, HostListener, Input } from '@angular/core';
import { PhotoViewerService } from '../../services/photo-viewer.service';

@Component({
  selector: 'ardon-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrl: './photo-viewer.component.scss',
})
export class PhotoViewerComponent {
  @Input() imageUrl: string = '';
  public title: string = '';
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.closePhotoView();
  }

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

    setTimeout(() => this.photoViewer.close(), 380);
  }

  ngOnDestroy() {
    if (this.scrollCheck) clearInterval(this.scrollCheck);
  }
}
