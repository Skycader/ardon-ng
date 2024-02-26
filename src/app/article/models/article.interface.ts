export interface ArdonArticleInterface {
  heading: string;
  themeImageSrc: string;
  blocks: ArdonArticleBlockInterface[];
}

export interface ArdonTextBlockInterface {
  paragraphs: string[];
}

export interface ArdonSubheadingBlockInterface {
  title: string;
}

export interface ArdonImageBlockInterface {
  imageSrc: string;
  imageTitle: string;
}

export interface ArdonSliderInterface {
  title: string;
  slides: ArdonSlideInterface[];
}

export interface ArdonSlideInterface {
  imageSrc: string;
  imageTitle: string;
}

export interface ArdonListInterface {
  items: string[];
}

interface ArdonChipListInputInterface {
  chips: string[];
}

export type ArdonArticleBlockInterface =
  | {
    type: 'text';
    content: ArdonTextBlockInterface;
  }
  | {
    type: 'subheading';
    content: ArdonSubheadingBlockInterface;
  }
  | {
    type: 'image';
    content: ArdonImageBlockInterface;
  }
  | {
    type: 'list';
    content: ArdonListInterface;
  }
  | {
    type: 'carousel';
    content: ArdonSliderInterface;
  }
  | {
    type: 'chip-list';
    content: ArdonChipListInputInterface;
  };
//export type ArdonContentType<T> = T;

export type ArdonAvailableTypes<T> = T extends 'text'
  ? 'text'
  : T extends 'subheading'
  ? 'subheading'
  : T extends 'image'
  ? 'image'
  : T extends 'slider'
  ? 'slider'
  : T extends 'list'
  ? 'list'
  : T extends 'chip-list'
  ? 'chip-list'
  : never;

export type ArdonContentType<T> = T extends 'text'
  ? ArdonTextBlockInterface
  : T extends 'subheading'
  ? ArdonSubheadingBlockInterface
  : T extends 'image'
  ? ArdonImageBlockInterface
  : T extends 'slider'
  ? ArdonSliderInterface
  : T extends 'list'
  ? ArdonListInterface
  : T extends 'chip-list'
  ? ArdonChipListInputInterface
  : never;
