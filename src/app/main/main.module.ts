import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdonCommonModule } from '../ardon-common/ardon-common.module';
import { MaterialModule } from '../material/material.module';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RecentArticlesComponent } from './components/recent-articles/recent-articles.component';
import { MainResolver } from './utils/resolvers/main.resolver';

@NgModule({
  declarations: [
    MainLayoutComponent,
    WelcomeComponent,
    AdvantagesComponent,
    RecentArticlesComponent,
  ],
  imports: [
    CommonModule,
    ArdonCommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: {
          mainData: MainResolver,
        },
        component: MainLayoutComponent,
      },
    ]),
  ],
})
export class MainModule {}
