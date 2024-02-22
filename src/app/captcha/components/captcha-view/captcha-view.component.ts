import { Component, Input } from '@angular/core';
import { CaptchaService } from '../../services/captcha.service';
import { CaptchaInterface } from '../../models/captcha.interface';
import { Observable, map, tap } from 'rxjs';
import { LocalStorageService } from '../../../ardon-core/services/local-storage.service';
@Component({
  selector: 'ardon-captcha-view',
  templateUrl: './captcha-view.component.html',
  styleUrl: './captcha-view.component.scss',
})
export class CaptchaViewComponent {
  public captcha$: Observable<CaptchaInterface> =
    this.captchaService.captcha$.pipe(
      tap((captcha: CaptchaInterface) => {
        const captchaSnapshot = `${captcha.expiresIn}.${captcha.hashed}`;
        this.localStorage.setItem('ardon-captcha-credentials', captchaSnapshot);
      }),
    );
  public captchaBase64$ = this.captcha$.pipe(
    map((captcha: CaptchaInterface) => captcha.base),
  );

  constructor(
    private captchaService: CaptchaService,
    private localStorage: LocalStorageService,
  ) { }
}
