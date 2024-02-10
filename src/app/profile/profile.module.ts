import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { MaterialModule } from '../material/material.module';
import { EditorComponent } from './components/editor/editor.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { profileResolver } from './utils/resolvers/profile.resolver';
import { CaptchaModule } from '../captcha/captcha.module';

@NgModule({
  declarations: [ProfileLayoutComponent, SignFormComponent, EditorComponent],
  imports: [
    MaterialModule,
    CaptchaModule,
    ArdonCommonModule,
    CommonModule,
    CdkDropList,
    CdkDrag,
    RouterModule.forChild([
      {
        path: 'profile',
        resolve: {
          profile: profileResolver,
        },
        component: ProfileLayoutComponent,
      },
      {
        path: 'editor/:id',
        resolve: {
          profile: profileResolver,
        },
        component: EditorComponent,
      },
    ]),
  ],
})
export class ProfileModule { }
