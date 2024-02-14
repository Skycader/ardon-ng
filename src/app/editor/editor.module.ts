import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CdkDrag, CdkDragPreview, CdkDropList } from '@angular/cdk/drag-drop';
import { EditorLayoutComponent } from './layouts/editor-layout/editor-layout.component';
import { EditorRootComponent } from './layouts/editor-root/editor-root.component';
import { ArticleModule } from '../article/article.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'edit',
    component: EditorLayoutComponent,
    children: [
      {
        path: ':id',
        component: EditorRootComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [EditorComponent, EditorLayoutComponent, EditorRootComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ArticleModule,
    CdkDropList,
    CdkDragPreview,
    CdkDrag,
    RouterModule.forChild(routes),
  ],
})
export class EditorModule { }
