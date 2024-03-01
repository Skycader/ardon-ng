import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdonCoreModule } from '../ardon-core/ardon-core.module';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PhotoViewerComponent } from './components/photo-viewer/photo-viewer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PopUpsComponent } from './pop-ups/pop-ups.component';
import { GetPipe } from './utils/pipes/get.pipe';
import { MarkUpDirective } from './utils/pipes/mark-up.directive';
import { MarkUpPipe } from './utils/pipes/mark-up.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent,
    LoadingBarComponent,
    GetPipe,
    ChipListComponent,
    PopUpsComponent,
    PhotoViewerComponent,
    MarkUpPipe,
    MarkUpDirective,
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
    ChipListComponent,
    PopUpsComponent,
    MarkUpPipe,
    MarkUpDirective,
  ],
})
export class ArdonCommonModule {}
