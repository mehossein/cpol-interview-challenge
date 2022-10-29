import { Injectable } from '@angular/core';
import { ActiveToast, IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {
  constructor(private readonly _toastr: ToastrService) {}

  private readonly COMMON_CONFIG: Partial<IndividualConfig> = {
    positionClass: 'toast-top-right',
    progressBar: true,
  };

  private _getDuration(message: string): number {
    if (typeof message != 'string') return 10;
    const duration: number = Math.floor((message.length / 5) * 500);
    return duration < 3000 ? 3000 : duration;
  }

  success<T = any>(message: string): ActiveToast<T> {
    return this._toastr.success(message, '', {
      ...this.COMMON_CONFIG,
      timeOut: this._getDuration(message),
    });
  }

  error<T = any>(message: string): ActiveToast<T> {
    return this._toastr.error(message, '', {
      ...this.COMMON_CONFIG,
      timeOut: this._getDuration(message),
    });
  }

  warning<T = any>(message: string): ActiveToast<T> {
    return this._toastr.warning(message, '', {
      ...this.COMMON_CONFIG,
      timeOut: this._getDuration(message),
    });
  }

  info<T = any>(message: string): ActiveToast<T> {
    return this._toastr.info(message, '', {
      ...this.COMMON_CONFIG,
      timeOut: this._getDuration(message),
    });
  }
}
