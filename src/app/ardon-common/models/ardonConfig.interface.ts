export interface ArdonConfigInterface {
  appName: string; //i.e. Ardon Engine
  appLogo: string; //material logo reference
  subtitle: string; //subtitle for appBackgroundImage
  subtitleHref: string; //href for subtitle
  appBackgroundImage: string;
  search: string; //search title such as "Search for articles",
  searchArticles: string; //A list of articles under the search input "Latest articles or Most popular"
  searchPlaceholder: string; //placeholder for search
  backgroundImageSrc: string; //background image
  description: string; //Make your blog look awesome today
  startButtons: StartButton[]; //Explore now
  advantages: AdvantageInterface[];
  welcomeTopicName: string; //most recent articles
  welcomeTopics: ArticlePreviewInterface[];
  version: string; // 0.0.1
  releaseYear: string;
  navbarButtonsLeft: NavbarButton[];
  navbarButtonsRight: NavbarButton[];
  navigation: {
    title: string; //Navigation
    topics: string; //Topics
    interesting: string; //You may like
  };
  articleContents: string; //Contents (or Содержание)
  articleComments: string; //Comments (or Комментарии)
}

interface NavbarButton {
  icon: string;
  title: string;
  href: string;
  routerLink: string[];
}

export interface StartButton {
  title: string;
  destionation: string;
}

export interface AdvantageInterface {
  header: string; //big h1 text
  text: string; //more detials about this advantage
}

export interface ArticlePreviewInterface {
  title: string;
  subheader: string;
  avatarSrc: string;
  backgroundMode?: BackgroundMode;
  backgroundSrc: string;
  description: string;
  buttons: CardButtonInterface[];
}

enum BackgroundMode {
  cover = 'cover',
  display = 'display',
}

export interface CardButtonInterface {
  icon: string;
  text: string;
  destination?: string[];
}
