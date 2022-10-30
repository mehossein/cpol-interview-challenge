// angular
import { Injectable, Injector } from '@angular/core';

// Third-Party
import { Observable } from 'rxjs';

// app
import { ServiceBase } from '@shared/classes';

@Injectable()
export class DashboardApi extends ServiceBase {
  constructor(injector: Injector) {
    super(injector);
  }
}
