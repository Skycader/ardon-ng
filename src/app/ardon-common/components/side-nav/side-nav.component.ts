import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { of, switchMap, timer } from 'rxjs';
import { ThemeService } from '../../../ardon-core/services/theme.service';

export interface Section {
  name: string;
}

@Component({
  selector: 'ardon-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  topics: Section[] = [
    {
      name: 'Услуги',
    },
  ];
  articles: Section[] = [
    {
      name: 'Мощение дорожек и площадок',
    },
    {
      name: 'Дренаж и система водоотведения',
    },
  ];

  public get isSideNav() {
    return this.navbarService.isSideNav;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    this.closeSideNav();
  }

  constructor(
    private navbarService: NavbarService,
    public readonly themeService: ThemeService,
  ) { }

  public closeSideNav() {
    this.navbarService.closeSideNav();
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }
}
