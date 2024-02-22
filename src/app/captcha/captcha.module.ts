import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaViewComponent } from './components/captcha-view/captcha-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';

@NgModule({
  declarations: [CaptchaViewComponent],
  providers: [],
  imports: [CommonModule, HttpClientModule, MaterialModule, ArdonCommonModule],
  exports: [CaptchaViewComponent],
})
export class CaptchaModule { }
