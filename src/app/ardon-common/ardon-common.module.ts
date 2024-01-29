import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, SideNavComponent],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [NavbarComponent, SideNavComponent],
})
export class ArdonCommonModule { }
