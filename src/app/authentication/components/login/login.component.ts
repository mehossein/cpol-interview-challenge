// Angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// App
import { USER_DATA } from '@app/shared/constants';
import { AuthApi } from '@app/authentication/Api';
import { AlertService } from '@app/shared/services';
import { CookieHandler } from '@app/shared/classes';

// Third-Party
import { finalize } from 'rxjs';

@Component({
  selector: 'cpol-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  pending: boolean = false;

  constructor(
    private readonly _router: Router,
    private readonly _authApi: AuthApi,
    private readonly _alertSrv: AlertService,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.pending) return;
      this.pending = true;
      this._authApi
        .login(this.form.value)
        .pipe(
          finalize(() => {
            this.pending = false;
          })
        )
        .subscribe({
          next: ({ token, user }) => {
            CookieHandler.setToken(token);
            localStorage.setItem(USER_DATA, JSON.stringify(user));
            this._router.navigate(['dashboard']);
            this._alertSrv.success('عملیات موفقیت آمیز بود.');
          },
          error: () => {
            this._alertSrv.warning('نام کاربری یا رمز ورود صحیح نمی باشد.');
          },
        });
    } else {
      this._alertSrv.warning('لطفا فیلد های اجباری را تکمیل کنید.');
    }
  }

  getInputIsValid(name: string): boolean {
    return Boolean(
      this.form.get(name)?.invalid &&
        (this.form.get(name)?.touched || this.form.get(name)?.dirty)
    );
  }
}
