import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CaptchaInterface } from '../../../captcha/models/captcha.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environemnt } from '../../../../environments/environment';
import { Captcha } from './captcha.class';

@Component({
  selector: 'ardon-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.scss',
})
export class SignFormComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordAgain: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    captchaAnswer: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
  });

  constructor(private http: HttpClient) { }

  public captcha: Captcha = new Captcha();
  public setCaptcha(captcha: CaptchaInterface) {
    this.captcha.setCaptcha(captcha);
  }

  public submitForm() {
    this.captcha.setAnswer(this.form.value['captchaAnswer']);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Captcha: this.captcha.stringify(),
    });
    let options = { headers: headers };

    this.http.post('auth/signup', this.form.value, options).subscribe();
  }
}
