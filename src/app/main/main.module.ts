import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { AdvantagesComponent } from './components/advantages/advantages.component';

@NgModule({
  declarations: [MainLayoutComponent, WelcomeComponent, AdvantagesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: MainLayoutComponent }]),
  ],
})
export class MainModule {}
