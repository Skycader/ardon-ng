export interface ArdonArticleInterface {
  heading: string;
  themeImageSrc: string;
  blocks: ArdonArticleBlockInterface[];
}

export interface ArdonArticleBlockInterface {
  type: 'text' | 'subheading' | 'image' | 'list' | 'carousel';
  content: string[];
}
