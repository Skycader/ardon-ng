import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _isSideNav: boolean = false;
  constructor() { }

  public get isSideNav() {
    return this._isSideNav;
  }
  public openSideNav() {
    this._isSideNav = true;
  }
  public toggleSideNav(): void {
    this._isSideNav = !this.isSideNav;
  }
}
