import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { MaterialModule } from '../material/material.module';
import { ArticleSearchComponent } from './components/article-search/article-search.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { ContentsComponent } from './components/contents/contents.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ImageComponent } from './components/image/image.component';
import { TextComponent } from './components/text/text.component';
import { ArticleLayoutComponent } from './layouts/article-layout/article-layout.component';
import { articleResolver } from './utils/resolvers/article.resolver';
import { ArdonCoverComponent } from './components/ardon-cover/ardon-cover.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { ListComponent } from './components/list/list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
const routes: Routes = [
  {
    path: 'article',
    component: ArticleLayoutComponent,
    children: [
      {
        path: 'search',
        component: ArticleSearchComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        resolve: {
          article: articleResolver,
        },
        component: ArticleViewComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ArticleViewComponent,
    ArticleLayoutComponent,
    ArticleSearchComponent,
    ImageComponent,
    HeadingComponent,
    TextComponent,
    ContentsComponent,
    ArdonCoverComponent,
    SubheadingComponent,
    ListComponent,
    CarouselComponent,
  ],
  imports: [
    FormsModule,
    CarouselModule,
    ArdonCommonModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class ArticleModule {}
