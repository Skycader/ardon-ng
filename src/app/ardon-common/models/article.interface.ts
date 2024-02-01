export interface ArticleInterface {
  title: string;
  contents: string[];
  topicImageSrc: string;
  content: ContentInterface[];
}

export interface ContentInterface {
  type: 'text' | 'image' | 'list';
  content: string;
}
