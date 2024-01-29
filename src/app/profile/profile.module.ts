import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'profile',
        component: ProfileLayoutComponent,
      },
    ]),
  ],
})
export class ProfileModule { }
