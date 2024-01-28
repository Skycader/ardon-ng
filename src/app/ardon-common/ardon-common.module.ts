import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../../material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [NavbarComponent, SideNavComponent],
  imports: [MaterialModule, CommonModule],
  exports: [NavbarComponent, SideNavComponent],
})
export class ArdonCommonModule {}
