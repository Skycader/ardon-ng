export interface ArdonArticleInterface {
  heading: string;
  themeImageSrc: string;
  blocks: ArdonArticleBlockInterface<any>[];
}

export interface ArdonArticleBlockInterface<T> {
  type: 'text' | 'subheading' | 'image' | 'list' | 'carousel' | 'chip-list';
  content: ArdonUniformType<T>;
}

export type ArdonUniformType<T> = T;
