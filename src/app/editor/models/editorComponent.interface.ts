import { ArdonSlideInterface } from '../../article/models/article.interface';

export type EditBlockType =
  | EditBlockTextInterface
  | EditBlockImageInterface
  | EditBlockSubheadingInterface
  | EditBlockCarouselInterface;

interface EditBlockTextInterface {
  title: string;
  type: 'text';
  icon: string;
  content: {
    value: string;
  };
}

interface EditBlockImageInterface {
  title: string;
  type: 'image';
  icon: string;
  content: {
    imageSrc: string;
    imageTitle: string;
  };
}

interface EditBlockSubheadingInterface {
  title: string;
  type: 'subheading';
  icon: string;
  content: {
    title: string;
  };
}

export interface EditBlockCarouselInterface {
  title: string;
  type: 'carousel';
  icon: string;
  content: {
    slides: ArdonSlideInterface[];
  };
}
