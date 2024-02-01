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
  text: string;
  destination?: string[];
}
