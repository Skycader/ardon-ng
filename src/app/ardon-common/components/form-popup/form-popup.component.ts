import {
  Component,
  HostListener,
  Input,
  Sanitizer,
  SecurityContext,
} from '@angular/core';
import { FormConfig } from '../../models/formConfig.type';
import { FormViewerService } from '../../services/form-viewer.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ardon-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrl: './form-popup.component.scss',
})
export class FormPopupComponent {
  @Input() config!: FormConfig;

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

  public scrollCheck: ReturnType<typeof setInterval> | null = null;
  constructor(
    public formViewer: FormViewerService,
    private sanitizer: DomSanitizer,
  ) {}
  ngAfterViewInit() {
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

    setTimeout(() => this.formViewer.close(), 380);
  }

  ngOnDestroy() {
    if (this.scrollCheck) clearInterval(this.scrollCheck);
  }
}
