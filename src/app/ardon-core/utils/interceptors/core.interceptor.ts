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

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      url: environemnt.apiUrl + '/' + req.url + `?requestTime=${Date.now()}`,
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) console.log('Server response');
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 400) console.error('Wrong captcha');
          }
        },
      ),
    );
  }
}
