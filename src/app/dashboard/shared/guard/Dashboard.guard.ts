// Angular
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// App
import { CookieHandler } from '@shared/classes';

@Injectable({ providedIn: 'root' })
export class DashboardGuard implements CanActivate {
  constructor(private readonly _router: Router) {}

  canActivate(): boolean {
    if (CookieHandler.getToken()) {
      return true;
    } else {
      this._router.navigate(['auth/login']);
      return false;
    }
  }
}
