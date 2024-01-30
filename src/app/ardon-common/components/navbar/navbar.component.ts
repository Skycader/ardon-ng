import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

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

  constructor(private navbarService: NavbarService) {}

  public openSideNav() {
    this.navbarService.openSideNav();
  }
}
