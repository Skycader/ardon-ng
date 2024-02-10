import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreInterceptor } from './utils/interceptors/core.interceptor';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule],
})
export class ArdonCoreModule { }
