import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, SideNavComponent, FooterComponent],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [NavbarComponent, SideNavComponent, FooterComponent],
})
export class ArdonCommonModule { }
