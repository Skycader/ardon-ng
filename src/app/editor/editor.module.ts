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
import { ArticleCoverListComponent } from './components/article-cover-list/article-cover-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { AvailableComponentsComponent } from './components/available-components/available-components.component';
import { DragCarouselComponent } from './components/drag-carousel/drag-carousel.component';
import { DragCollageComponent } from './components/drag-collage/drag-collage.component';
import { DragHandleComponent } from './components/drag-handle/drag-handle.component';
import { DragImageComponent } from './components/drag-image/drag-image.component';
import { EditorTextareaComponent } from './components/editor-textarea/editor-textarea.component';
import { EditorComponent } from './components/editor/editor.component';
import { PreviewComponentsComponent } from './components/preview-components/preview-components.component';
import { PreviewCoverDragListComponent } from './components/preview-cover-drag-list/preview-cover-drag-list.component';
import { PreviewCoverComponent } from './components/preview-cover/preview-cover.component';
import { EditorLayoutComponent } from './layouts/editor-layout/editor-layout.component';
import { EditorRootComponent } from './layouts/editor-root/editor-root.component';
import { DragTableComponent } from './components/drag-table/drag-table.component';
import { DragAccordionComponent } from './components/drag-accordion/drag-accordion.component';

const routes: Routes = [
  {
    path: '',
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
    PreviewCoverComponent,
    DragImageComponent,
    PreviewCoverDragListComponent,
    DragCarouselComponent,
    DragCollageComponent,
    ArticleCoverListComponent,
    DragTableComponent,
    DragAccordionComponent,
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
