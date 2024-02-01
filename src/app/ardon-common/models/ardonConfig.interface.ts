export interface ArdonConfigInterface {
  appName: string; //i.e. Ardon Engine
  backgroundImageSrc: string; //background image
  description: string; //Make your blog look awesome today
  startButton: string; //Explore now
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
}

export interface AdvantageInterface {
  header: string; //big h1 text
  text: string; //more detials about this advantage
}

export interface ArticlePreviewInterface {
  title: string;
  subheader: string;
  imageSrc: string;
  description: string;
}
