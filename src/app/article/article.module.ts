import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { CardComponent } from '../ardon-common/components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { ArdonCoverComponent } from './components/ardon-cover/ardon-cover.component';
import { ArticleNotFoundComponent } from './components/article-not-found/article-not-found.component';
import { ArticleSearchComponent } from './components/article-search/article-search.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContentsComponent } from './components/contents/contents.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ImageComponent } from './components/image/image.component';
import { ListComponent } from './components/list/list.component';
import { PhotoCollageComponent } from './components/photo-collage/photo-collage.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { TextComponent } from './components/text/text.component';
import { ArticleLayoutComponent } from './layouts/article-layout/article-layout.component';
import { articleResolver } from './utils/resolvers/article.resolver';
import { SearchResolver } from './utils/resolvers/search.resolver';
const routes: Routes = [
  {
    path: 'article',
    component: ArticleLayoutComponent,
    children: [
      {
        path: 'search',
        component: ArticleSearchComponent,
        pathMatch: 'full',
        resolve: {
          articlesList: SearchResolver,
        },
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
    ArticleNotFoundComponent,
    PhotoCollageComponent,
  ],
  imports: [
    FormsModule,
    FlexLayoutModule,
    CarouselModule,
    ArdonCommonModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ArticleViewComponent,
    ArticleLayoutComponent,
    ArticleSearchComponent,
    CardComponent,
    ImageComponent,
    HeadingComponent,
    TextComponent,
    ContentsComponent,
    ArdonCoverComponent,
    SubheadingComponent,
    ListComponent,
    CarouselComponent,
    ArticleNotFoundComponent,
  ],
})
export class ArticleModule { }
