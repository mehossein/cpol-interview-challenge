// Angular
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

// App
import { USER_DATA } from '@app/shared/constants';
import { CookieHandler } from '@shared/classes/cookie.class';

@Component({
  selector: 'cpol-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private readonly _router: Router) {}

  get getUsername(): string {
    return (
      JSON.parse(localStorage.getItem(USER_DATA) as string)['username'] ??
      'user'
    );
  }

  onClickLogout(): void {
    localStorage.clear();
    CookieHandler.removeToken();
    this._router.navigate(['auth/login']);
  }
}
