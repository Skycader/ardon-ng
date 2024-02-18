import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public getItem(key: string) {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  public setItem(key: string, data: any) {
    if (this.isBrowser) {
      localStorage.setItem(key, data);
    }
  }

  public removeItem(key: string) {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }
}
