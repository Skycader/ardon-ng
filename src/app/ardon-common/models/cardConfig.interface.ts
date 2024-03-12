export interface CardConfigInterface {
  title: string;
  subheader: string;
  avatarSrc: string;
  backgroundSrc: string;
  backgroundMode?: BackgroundMode;
  description: string;
  buttons: CardButtonInterface[];
}

export enum BackgroundMode {
  cover = 'cover',
  display = 'display',
}
export interface CardButtonInterface {
  icon: string;
  type: ButtonTypes;
  text: string;
  destination?: string[];
}

export enum ButtonTypes {
  visit = 'visit',
  share = 'share',
}
