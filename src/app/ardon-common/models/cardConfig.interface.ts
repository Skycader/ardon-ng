export interface CardConfigInterface {
  title: string;
  subheader: string;
  avatarSrc: string;
  backgroundSrc: string;
  description: string;
  buttons: CardButtonInterface[];
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
