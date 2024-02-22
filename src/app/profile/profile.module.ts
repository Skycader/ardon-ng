import { CdkDrag, CdkDropList, CdkDragPreview } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { MaterialModule } from '../material/material.module';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { profileResolver } from './utils/resolvers/profile.resolver';
import { CaptchaModule } from '../captcha/captcha.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileLayoutComponent, SignFormComponent],
  imports: [
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    CaptchaModule,
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
export class ProfileModule { }
