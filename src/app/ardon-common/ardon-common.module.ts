import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GetPipe } from './utils/pipes/get.pipe';
import { ArdonCoreModule } from '../ardon-core/ardon-core.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent,
    LoadingBarComponent,
    GetPipe,
  ],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [
    HttpClientModule,
    NavbarComponent,
    ArdonCoreModule,
    SideNavComponent,
    FooterComponent,
    CardComponent,
    LoadingBarComponent,
    GetPipe,
  ],
})
export class ArdonCommonModule { }
