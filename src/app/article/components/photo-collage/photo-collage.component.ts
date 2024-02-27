import { Component } from '@angular/core';
import { ArdonImageBlockInterface } from '../../models/article.interface';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';

@Component({
  selector: 'ardon-photo-collage',
  templateUrl: './photo-collage.component.html',
  styleUrl: './photo-collage.component.scss',
})
export class PhotoCollageComponent {
  constructor(private readonly photoViewer: PhotoViewerService) { }

  imagesConfig = {
    1: [{ grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)' }],
  };
  images = [
    {
      src: 'https://i.imgur.com/Png2K4d.png',
      grow: 1,
      shrink: 0,
      basis: 'calc(25% - 0.5rem)',
    },
    {
      src: 'https://i.imgur.com/PHFsMpE.png',
      grow: 1,
      shrink: 0,
      basis: 'calc(25% - 0.5rem)',
    },
    {
      src: 'https://i.imgur.com/zInqh72.png',
      grow: 1,
      shrink: 0,
      basis: 'calc(25% - 0.5rem)',
    },
  ];

  public openPhoto(photo: any) {
    this.photoViewer.open({ imageSrc: photo.src, imageTitle: '' });
  }
}
