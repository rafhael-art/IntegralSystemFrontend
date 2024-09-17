import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map, pipe } from 'rxjs';
import { SelectOption } from './select-options.interface';
import * as env from "../../../environment/environments";
import { BaseResponse } from '../bases/base-response.interface';
@Injectable({
  providedIn: 'root'
})
export class SelectOptionsService {

  constructor(
    private _http: HttpClient
  ) { }

  async getSelectOptions(apiUrl: string) {
    var value = this._http.get<BaseResponse<SelectOption[]>>(env.base_url + apiUrl);
    return (await lastValueFrom(value)).data;
  }
}
