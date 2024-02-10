export interface CaptchaInterface {
  expiresIn: number; // time it expires in unix
  hashed: string; // hashed
  base: string; //image in base64 format
}
