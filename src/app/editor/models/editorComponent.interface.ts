import { ArdonSlideInterface } from '../../article/models/article.interface';

export type EditBlockType =
  | EditBlockTextInterface
  | EditBlockImageInterface
  | EditBlockSubheadingInterface
  | EditBlockListInterface
  | EditBlockCollageInterface
  | EditBlockCollageInterface
  | EditBlockCarouselInterface;

interface EditBlockTextInterface {
  title: string;
  type: 'text';
  icon: string;
  content: {
    value: string;
  };
}

export interface EditBlockImageInterface {
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

interface EditBlockListInterface {
  title: string;
  type: 'list';
  icon: string;
  content: {
    value: '';
  };
}

export interface EditBlockCollageInterface {
  title: string;
  type: 'collage';
  icon: string;
  content: {
    photos: ArdonSlideInterface[];
  };
}

export interface EditBlockCollageInterface {
  title: string;
  type: 'collage';
  icon: string;
  content: {
    photos: ArdonSlideInterface[];
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
