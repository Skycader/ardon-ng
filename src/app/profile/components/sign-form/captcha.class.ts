import { CaptchaInterface } from '../../../captcha/models/captcha.interface';

export class Captcha {
  public expiresIn: number = 0;
  public hashed: string = '';
  public answer: string = '';
  public base: string = '';

  constructor() { }

  public setCaptcha(captcha: CaptchaInterface) {
    this.expiresIn = captcha.expiresIn;
    this.hashed = captcha.hashed;
  }

  public setAnswer(answer: string) {
    this.answer = answer;
  }
  public stringify() {
    return JSON.stringify({
      expiresIn: this.expiresIn,
      hashed: this.hashed,
      answer: this.answer,
    });
  }
}
