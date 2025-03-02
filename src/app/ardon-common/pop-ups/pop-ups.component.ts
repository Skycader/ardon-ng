import { Component } from '@angular/core';
import { PhotoViewerService } from '../services/photo-viewer.service';
import { FormViewerService } from '../services/form-viewer.service';

@Component({
  selector: 'ardon-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrl: './pop-ups.component.scss',
})
export class PopUpsComponent {
  constructor(
    public photoViewer: PhotoViewerService,
    public formViewer: FormViewerService,
  ) {}
}
