import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaViewComponent } from './components/captcha-view/captcha-view.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CaptchaInterceptor } from './utils/interceptors/captcha.interceptor';

@NgModule({
  declarations: [CaptchaViewComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CaptchaInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class CaptchaModule { }
