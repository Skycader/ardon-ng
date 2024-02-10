import { Injectable } from '@angular/core';
import { CaptchaInterface } from '../models/captcha.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  public captcha$: Observable<CaptchaInterface> =
    this.http.get<CaptchaInterface>('captcha');
  constructor(private http: HttpClient) { }
}
