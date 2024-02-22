import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CaptchaInterface } from '../../../captcha/models/captcha.interface';

@Component({
  selector: 'ardon-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.scss',
})
export class SignFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
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

  public submitForm() { }
}
