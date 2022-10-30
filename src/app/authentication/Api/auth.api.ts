// Angular
import { Injectable, Injector } from '@angular/core';

// Third-Party
import { Observable } from 'rxjs';

// App
import {
  LoginModel,
  loginResponse,
} from '@app/authentication/shared/interface';
import { ServiceBase } from '@shared/classes';

@Injectable()
export class AuthApi extends ServiceBase {
  constructor(injector: Injector) {
    super(injector);
  }

  //#region "auth api"

  login(model: LoginModel): Observable<loginResponse> {
    return this.post$<LoginModel, loginResponse>('auth/login/', model);
  }

  //#endregion "auth api"
}
