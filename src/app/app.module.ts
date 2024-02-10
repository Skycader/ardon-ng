import { NgModule, isDevMode } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ArdonCommonModule } from './ardon-common/ardon-common.module';
import { ProfileModule } from './profile/profile.module';
import { MainModule } from './main/main.module';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ArdonCommonModule,
    ProfileModule,
    MainModule,
    ArticleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
