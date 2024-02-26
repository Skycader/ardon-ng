import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environemnt } from '../../../../environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      url: environemnt.apiUrl + '/' + req.url + `?requestTime=${Date.now()}`,
      headers: req.headers.set(
        'auth-token',
        localStorage.getItem('auth-token') || '',
      ),
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => { },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 400) console.error('Wrong captcha');
          }
        },
      ),
    );
  }
}
