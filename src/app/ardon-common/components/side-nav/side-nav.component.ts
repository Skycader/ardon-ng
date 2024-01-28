import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'ardon-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  public get isSideNav() {
    return this.navbarService.isSideNav;
  }
  constructor(private navbarService: NavbarService) { }

  public toggleSideNav() {
    this.navbarService.toggleSideNav();
  }
}
