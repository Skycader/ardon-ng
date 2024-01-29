import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ArticleLayoutComponent } from './layouts/article-layout/article-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleSearchComponent } from './components/article-search/article-search.component';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleLayoutComponent,
    children: [
      {
        path: ':id',
        component: ArticleLayoutComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ArticleLayoutComponent, ArticleSearchComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)], 
})
export class ArticleModule {}
