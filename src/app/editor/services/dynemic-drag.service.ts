import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynemicDragService {
  public ids: string[] = [];
  private debug = true;
  constructor() {
    if (this.debug)
      setInterval(() => {
        console.log(this.ids);
      }, 1000);
  }

  public generateId(prefix: string) {
    const id = prefix + '_' + (Math.random() * 1000000).toFixed(0);
    this.ids.push(id);
    return id;
  }

  public getIds() {
    return this.ids;
  }

  public removeId(id: string) {
    this.ids = this.ids.filter((item: string) => item !== id);
  }
}
