import { Component, Input } from '@angular/core';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';
import { ArdonCollageInterface } from '../../models/article.interface';

@Component({
  selector: 'ardon-photo-collage',
  templateUrl: './photo-collage.component.html',
  styleUrl: './photo-collage.component.scss',
})
export class PhotoCollageComponent {
  @Input() content: ArdonCollageInterface = {
    photos: [],
  };
  constructor(private readonly photoViewer: PhotoViewerService) {}

  imagesConfig = {
    1: [{ grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)' }],
  };

  public openPhoto(photo: any) {
    this.photoViewer.open(photo);
  }
}
