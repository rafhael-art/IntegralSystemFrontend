import { Inject, Injectable, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../../common/bases/base-response.interface';
import { Menu } from '../model/menu.interface';
import * as env from '../../../../environment/environments';
@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private _authService = inject(AuthService);

  constructor(private _http: HttpClient) { }

  getAccesos(): Observable<BaseResponse<Menu[]>> {
    return this._http.get<BaseResponse<Menu[]>>(`${env.base_url}Auth/${this._authService.CurrentUser.id}`);
  }
}
