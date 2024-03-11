import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormConfig } from '../models/formConfig.type';

@Injectable({
  providedIn: 'root',
})
export class FormViewerService {
  public readonly isOpen$ = new BehaviorSubject(false);

  public formConfig: FormConfig = {
    type: 'iframe',
    url: '',
  };
  constructor() {}

  public open(config: FormConfig) {
    if (config.type === 'iframe') {
      this.formConfig.type = 'iframe';
      this.formConfig.url = config.url;
    }
    this.isOpen$.next(true);
  }

  public close() {
    this.isOpen$.next(false);
  }
}
