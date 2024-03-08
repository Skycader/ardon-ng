export interface ArdonConfigInterface {
  appName: string; //i.e. Ardon Engine
  appLogo: string; //material logo reference
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
  navigation: {
    title: string; //Navigation
    topics: string; //Topics
    interesting: string; //You may like
  };
  articleContents: string; //Contents (or Содержание)
  articleComments: string; //Comments (or Комментарии)
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
  backgroundSrc: string;
  description: string;
  buttons: CardButtonInterface[];
}

export interface CardButtonInterface {
  icon: string;
  text: string;
  destination?: string[];
}
