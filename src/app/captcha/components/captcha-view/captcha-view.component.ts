import { Component } from '@angular/core';
import { CaptchaService } from '../../services/captcha.service';
import { CaptchaInterface } from '../../models/captcha.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Component({
  selector: 'ardon-captcha-view',
  templateUrl: './captcha-view.component.html',
  styleUrl: './captcha-view.component.scss',
})
export class CaptchaViewComponent {
  public captchaUrl$: Observable<string> = this.captchaService.captcha$.pipe(
    map((captcha: CaptchaInterface) => captcha.base),
  );
  constructor(private captchaService: CaptchaService) { }
}
