import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { MaterialModule } from '../material/material.module';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { profileResolver } from './utils/resolvers/profile.resolver';
import { SignFormComponent } from './components/sign-form/sign-form.component';

@NgModule({
  declarations: [ProfileLayoutComponent, SignFormComponent],
  imports: [
    MaterialModule,
    ArdonCommonModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'profile',
        resolve: {
          profile: profileResolver,
        },
        component: ProfileLayoutComponent,
      },
    ]),
  ],
})
export class ProfileModule {}
