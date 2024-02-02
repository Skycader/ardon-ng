import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ArdonArticleInterface } from '../../models/article.interface';

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

  constructor(public articleService: ArticleService) { }

  public article: ArdonArticleInterface = {
    heading: 'Мощение дорожек и площадок',
    themeImageSrc: 'https://i.imgur.com/FkXmNFE.jpeg',
    blocks: [
      {
        type: 'text',
        content:
          'Данный вид работ осуществляется под руководством технически грамотного специалиста, имеющего опыт работы с геодезическими приборами, обладающем чувством объемного восприятия территории объекта, опытом руководства бригадой из 3-40 физически сильных и грамотно обученных рабочих, и что не маловажно, с большим опытом логистики по таким объектам.                                В зависимости от специфики грунтов, уклонов и требуемой весовой нагрузки на вашем участке рассчитывается один из типов мощения.',
      },
      {
        type: 'subheading',
        content: 'Этапы работ по мощению на цементно-песчаную смесь',
      },
    ],
  };
}
