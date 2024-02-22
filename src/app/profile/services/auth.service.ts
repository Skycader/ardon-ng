import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCredentialsDto } from '../models/authCredentials.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public signUp(authCredentials: AuthCredentialsDto) {
    this;
  }
}
