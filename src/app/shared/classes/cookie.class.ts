import { TOKEN } from '../constants';

export class CookieHandler {
  static setToken(token: string, expireTime: number = 24) {
    this.setCookie(TOKEN, token, expireTime);
  }

  static getToken(): string {
    return this._getCookie(TOKEN);
  }

  static removeToken() {
    this._eraseCookie(TOKEN);
  }

  private static setCookie(name: string, value: string, expireTime: number) {
    let expires: string = '';
    if (expireTime) {
      const date: Date = new Date();
      date.setTime(date.getTime() + expireTime * 60 * 60 * 1000);
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
