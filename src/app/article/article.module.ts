import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ArticleLayoutComponent } from './layouts/article-layout/article-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleSearchComponent } from './components/article-search/article-search.component';
import { FormsModule } from '@angular/forms';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { ImageComponent } from './components/image/image.component';
import { HeadingComponent } from './components/heading/heading.component';
import { TextComponent } from './components/text/text.component';
import { ContentsComponent } from './components/contents/contents.component';

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
  declarations: [ArticleViewComponent, ArticleLayoutComponent, ArticleSearchComponent, ImageComponent, HeadingComponent, TextComponent, ContentsComponent],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class ArticleModule {    }
