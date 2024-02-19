import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleModule } from '../article/article.module';
import { MaterialModule } from '../material/material.module';
import { EditorTextareaComponent } from './components/editor-textarea/editor-textarea.component';
import { EditorComponent } from './components/editor/editor.component';
import { EditorLayoutComponent } from './layouts/editor-layout/editor-layout.component';
import { EditorRootComponent } from './layouts/editor-root/editor-root.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { AvailableComponentsComponent } from './components/available-components/available-components.component';
import { PreviewComponentsComponent } from './components/preview-components/preview-components.component';
import { DragHandleComponent } from './components/drag-handle/drag-handle.component';

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
  declarations: [
    EditorComponent,
    EditorLayoutComponent,
    EditorRootComponent,
    EditorTextareaComponent,
    ArticlePreviewComponent,
    AvailableComponentsComponent,
    PreviewComponentsComponent,
    DragHandleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ArticleModule,
    CdkDropList,
    CdkDragPreview,
    CdkDragPlaceholder,
    CdkDrag,
    CdkDragHandle,
    RouterModule.forChild(routes),
  ],
})
export class EditorModule {}
