import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isDarkTheme = false;
  public get isDarkTheme() {
    const isDarkTheme = this.localStorage.getItem('ardon-theme');
    if (isDarkTheme === 'true') this._isDarkTheme = true;
    return this._isDarkTheme;
  }

  public set isDarkTheme(isDark: boolean) {
    this._isDarkTheme = isDark;
  }
  constructor(private localStorage: LocalStorageService) { }

  public applyTheme() {
    this.isDarkTheme ? this.enableDarkTheme() : this.disableDarkTheme();
  }

  public enableDarkTheme() {
    document.querySelector('body')!.classList.add('dark-theme');
    document.querySelector('body')!.setAttribute('data-bs-theme', 'dark');
    this.localStorage.setItem('ardon-theme', 'true');
    this.isDarkTheme = true;
  }

  public disableDarkTheme() {
    document.querySelector('body')!.classList.remove('dark-theme');
    document.querySelector('body')!.setAttribute('data-bs-theme', 'light');
    this.localStorage.removeItem('ardon-theme');
    this.isDarkTheme = false;
  }

  public toggleTheme() {
    this.isDarkTheme ? this.disableDarkTheme() : this.enableDarkTheme();
  }
}
