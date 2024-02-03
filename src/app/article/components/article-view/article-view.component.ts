import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ArdonArticleInterface } from '../../models/article.interface';
import { PhotoViewerService } from '../../services/photo-viewer.service';

@Component({
  selector: 'ardon-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
  public ngOnInit(): void {
    // window.scrollTo({ top: 0, behavior: 'instant' });

    this.articleService.article$.subscribe((res: any) => console.log(res));
  }

  constructor(
    public articleService: ArticleService,
    public photoViewer: PhotoViewerService,
  ) { }

  public article: ArdonArticleInterface = {
    heading: 'Мощение дорожек и площадок',
    themeImageSrc: 'https://i.imgur.com/FkXmNFE.jpeg',
    blocks: [
      {
        type: 'text',
        content: [
          `Данный вид работ осуществляется под руководством технически грамотного специалиста, имеющего опыт работы с геодезическими приборами,
          обладающем чувством объемного восприятия территории объекта, опытом руководства бригадой из 3-40 физически сильных и грамотно обученных рабочих,
          и что не маловажно, с большим опытом логистики по таким объектам.
          В зависимости от специфики грунтов, уклонов и требуемой весовой нагрузки на вашем участке рассчитывается один из типов мощения.`,
        ],
      },
      {
        type: 'subheading',
        content: ['Этапы работ по мощению на цементно-песчаную смесь'],
      },
      {
        type: 'list',
        content: [
          'Выемка грунта',
          'Подготовка песчано-щебеночного основания',
          'Монтаж бордюров',
          'Укладка отделочного материала на монтажный слой',
          'Засыпка швов',
        ],
      },

      {
        type: 'subheading',
        content: ['Этапы работ по мощению на бетонное основание'],
      },
      {
        type: 'list',
        content: [
          'Выемка грунта',
          'Подготовка песчано-щебеночного основания',
          'Монтаж бордюров',
          'Монтаж дорожной сварной сетки',
          'Бетонирование слоем 10-12см',
          'Укладка отделочного материала на клей',
          'Засыпка швов',
        ],
      },
      {
        type: 'text',
        content: ['Ещё пара фотографий'],
      },
      {
        type: 'carousel',
        content: [
          'https://i.imgur.com/3W5R6n9.jpeg',
          'https://i.imgur.com/FkXmNFE.jpeg',
          'https://i.imgur.com/46Fo5r8.jpeg',
        ],
      },
    ],
  };
}
