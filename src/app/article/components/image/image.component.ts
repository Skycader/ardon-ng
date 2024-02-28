import { Component, Input } from '@angular/core';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';
import { ArdonImageBlockInterface } from '../../models/article.interface';

@Component({
  selector: 'ardon-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() content: ArdonImageBlockInterface = {
    imageSrc: '',
    imageTitle: '',
  };
  Math: any;

  constructor(public readonly photoViewer: PhotoViewerService) {}
}
