import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ThemeService } from '../../../ardon-core/services/theme.service';
import { ConfigService } from '../../../ardon-core/services/config.service';

@Component({
  selector: 'ardon-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public currentScroll: number = 0;
  public hideNavbar: boolean = false;

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    this.hideNavbar =
      window.scrollY > this.currentScroll && this.currentScroll > 56
        ? true
        : false;
    this.currentScroll = window.scrollY;
  }

  constructor(
    private navbarService: NavbarService,
    public configService: ConfigService,
    public themeService: ThemeService,
  ) { }

  public openSideNav() {
    this.navbarService.openSideNav();
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }
}
