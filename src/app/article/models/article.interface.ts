export interface ArdonArticleInterface {
  heading: string;
  themeImageSrc: string;
  blocks: ArdonArticleBlockInterface<any>[];
}

export interface ArdonArticleBlockInterface<T> {
  type: 'text' | 'subheading' | 'image' | 'list' | 'carousel' | 'chip-list';
  content: ArdonContentType<T>;
}

export type ArdonContentType<T> = { [key: string]: ArdonPropertyType<T> };

export type ArdonPropertyType<T> = T extends string[]
  ? string[]
  : T extends string
  ? string
  : never;
