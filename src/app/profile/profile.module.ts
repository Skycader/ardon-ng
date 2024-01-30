import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { MaterialModule } from '../material/material.module';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    MaterialModule,
    ArdonCommonModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'profile',
        component: ProfileLayoutComponent,
      },
    ]),
  ],
})
export class ProfileModule {}
