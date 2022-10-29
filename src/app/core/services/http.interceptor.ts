// Angular
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Third-Party
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

// App
import { AlertService } from '@shared/services';
import { CookieHandler } from '@shared/classes';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor(
    private readonly _router: Router,
    private readonly _alertSrv: AlertService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!window.navigator.onLine) {
      this._alertSrv.warning(
        'متاسفیم به نظر میرسد اتصال اینترنت شما برقرار نمی باشد!'
      );
      return EMPTY;
    }

    const token = CookieHandler.getToken();

    let tokenizedRequest: HttpRequest<any> = request;
    if (!request.url.includes('auth')) {
      tokenizedRequest = request.clone({
        setHeaders: {
          Authorization: `JWT-${token}`,
        },
      });
    }

    return next.handle(tokenizedRequest).pipe(
      timeout(30000),
      catchError((error: HttpErrorResponse) => this._errorHandler(error))
    );
  }

  private _errorHandler(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 404:
        this._alertSrv.warning('متاسفیم نمیتونیم سرویس رو پیدا کنیم!');
        return throwError(() => error);
      case 401:
        this._alertSrv.warning('مجوز دسترسی شما منقضی شده است');
        CookieHandler.removeToken();
        this._router.navigate(['auth/login']);
        return throwError(() => error);
      default:
        this._alertSrv.error(error.error.message);
        return throwError(() => error);
    }
  }
}
