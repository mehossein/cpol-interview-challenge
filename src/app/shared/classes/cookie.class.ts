import { REFRESH_TOKEN, TOKEN } from '../constants';

export class CookieHandler {
  static setToken(token: string) {
    this.setCookie(TOKEN, token, 1);
  }

  static getToken(): string {
    return this._getCookie(TOKEN);
  }

  static removeToken() {
    this._eraseCookie(TOKEN);
  }

  static setRefreshToken(token: string) {
    this.setCookie(REFRESH_TOKEN, token, 1);
  }

  static getRefreshToken(): string {
    return this._getCookie(REFRESH_TOKEN);
  }

  static removeRefreshToken() {
    this._eraseCookie(REFRESH_TOKEN);
  }

  private static setCookie(name: string, value: string, days = 1) {
    let expires: string = '';
    if (days) {
      const date: Date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  private static _getCookie(name: string): string {
    const nameEQ: string = name + '=';
    const splittedCookie: string[] = document.cookie.split(';');
    for (let index: number = 0; index < splittedCookie.length; index++) {
      let cookie: string = splittedCookie[index];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return '';
  }

  private static _eraseCookie(name: string): void {
    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
