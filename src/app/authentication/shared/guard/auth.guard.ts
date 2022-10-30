// Angular
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// App
import { CookieHandler } from '@shared/classes';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    localStorage.clear();
    CookieHandler.removeToken();
    return true;
  }
}
