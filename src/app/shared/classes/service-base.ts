// angular
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Third-Party
import { Observable } from 'rxjs';

// app
import { BASE_URL } from '../tokens';
import { ParamDto } from './params.dto';

export abstract class ServiceBase {
  private _http: HttpClient;
  private _baseUrl: string = '';

  constructor(injector: Injector, baseUrl?: string) {
    this._http = injector.get(HttpClient);
    this._baseUrl = baseUrl ?? injector.get(BASE_URL);
  }

  private get BaseUrl(): string {
    return this._baseUrl;
  }

  protected post$<IN = any, OUT = any>(
    url: string,
    body: IN,
    params: ParamDto[] = []
  ): Observable<OUT> {
    return this._http.post<OUT>(
      this.BaseUrl + url + this._getSerializedParams(params),
      body
    );
  }

  protected get$<OUT = any>(
    url: string,
    params: ParamDto[] = []
  ): Observable<OUT> {
    return this._http.get<OUT>(
      this.BaseUrl + url + this._getSerializedParams(params)
    );
  }

  protected delete$<OUT = any>(url: string, id: string): Observable<OUT> {
    return this._http.delete<OUT>(`${this.BaseUrl}${url}/${id}`);
  }

  protected put$<IN = any, OUT = any>(
    url: string,
    id: string,
    body: IN,
    params: ParamDto[] = []
  ): Observable<OUT> {
    return this._http.put<OUT>(
      this.BaseUrl + url + '/' + id + this._getSerializedParams(params),
      body
    );
  }

  protected patch$<IN = any, OUT = any>(
    url: string,
    body: IN,
    params: ParamDto[] = []
  ): Observable<OUT> {
    return this._http.patch<OUT>(
      this.BaseUrl + url + this._getSerializedParams(params),
      body
    );
  }

  private _getSerializedParams(params: ParamDto[]): string {
    params = params.filter(
      (item) =>
        item.value != undefined && item.value != null && item.value != ''
    );
    if (!params || params.length == 0) return '';
    return '?' + params.map((param) => param.key + '=' + param.value).join('&');
  }
}
