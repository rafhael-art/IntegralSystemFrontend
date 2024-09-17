import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BaseResponse } from '../../common/bases/base-response.interface';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../../data/sistema/Models/usuario.model';
import * as env from '../../../environment/environments';
import { format, startOfYear } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  get CurrentUser() {
    return JSON.parse(localStorage.getItem("user")!);
  }

  get isAuth(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  get anioEjercicio() {
    return localStorage.getItem('anioEjercico')!;
  }

  fechaInicialEjercicio(formato: 'MM-dd-yyyy' | 'dd/MM/yyyy') {
    return format(startOfYear(new Date(parseInt(this.anioEjercicio), 0)), formato);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('anioEjercico')
  }

  login(data: any): Observable<BaseResponse<Usuario>> {
    return this._http.post<BaseResponse<Usuario>>(`${env.base_url}Auth/Login`, data)
      .pipe(
        tap((resp) => {
          if (resp.isSucces)
            localStorage.setItem('user', JSON.stringify(resp.data));
        })
      );
  }
}
