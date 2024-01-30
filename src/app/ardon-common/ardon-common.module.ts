import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent,
    LoadingBarComponent,
  ],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    CardComponent,
    LoadingBarComponent,
  ],
})
export class ArdonCommonModule {}
