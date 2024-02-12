import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CdkDrag, CdkDragPreview, CdkDropList } from '@angular/cdk/drag-drop';
import { EditorLayoutComponent } from './layouts/editor-layout/editor-layout.component';

const routes: Routes = [
  {
    path: 'edit',
    component: EditorLayoutComponent,
    children: [
      {
        path: ':id',
        component: EditorComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [EditorComponent, EditorLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CdkDropList,
    CdkDragPreview,
    CdkDrag,
    RouterModule.forChild(routes),
  ],
})
export class EditorModule { }
