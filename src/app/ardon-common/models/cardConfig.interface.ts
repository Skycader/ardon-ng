export interface CardConfigInterface {
  head: string;
  subhead: string;
  avatar: string;
  background: string;
  description: string;
  buttons: CardButtonInterface[];
}

export interface CardButtonInterface {
  icon: string;
  text: string;
}
