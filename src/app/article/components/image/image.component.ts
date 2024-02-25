import { Component, Input } from '@angular/core';
import {
  ArdonContentType,
  ArdonImageBlockInterface,
} from '../../models/article.interface';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';

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

  constructor(public readonly photoViewer: PhotoViewerService) { }
}
