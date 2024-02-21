import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './ardon-common/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () =>
      import('./editor/editor.module').then((x) => x.EditorModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
