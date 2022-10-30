// Angular
import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';

//
import { Observable, of } from 'rxjs';

// App
import { SafeData } from '@app/dashboard/shared/interface';

@Injectable({
  providedIn: 'root',
})
export class FormGuard implements CanDeactivate<SafeData> {
  canDeactivate(
    component: SafeData
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.isDataSaved() && !component.editMode) {
      const confirmResult: boolean = confirm(
        'اطلاعات وارد شده در فرم دخیره نشده است .آیا مطمئن هستید می خواهید از این صفحه خارج شوید؟'
      );
      return of(confirmResult);
    }
    return of(true);
  }
}
