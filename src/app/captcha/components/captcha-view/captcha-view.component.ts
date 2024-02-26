import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() captcha: EventEmitter<CaptchaInterface> = new EventEmitter();
  public captcha$: Observable<CaptchaInterface> =
    this.captchaService.captcha$.pipe(
      tap((captcha: CaptchaInterface) => {
        this.captcha.emit(captcha);
      }),
    );
  public captchaBase64$ = this.captcha$.pipe(
    map((captcha: CaptchaInterface) => captcha.base),
  );

  public showCaptcha = true;
  public updateCaptcha() {
    this.showCaptcha = false;
    setTimeout(() => {
      this.showCaptcha = true;
    });
  }

  constructor(
    private captchaService: CaptchaService,
    private localStorage: LocalStorageService,
  ) { }
}
