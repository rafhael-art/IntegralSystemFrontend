import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as env from "../../../environment/environments";
import { Observable } from 'rxjs';
import { BaseResponse } from '../../../view/common/bases/base-response.interface';
import { NovaVentaGetAllDto } from '../model/nota-venta-get-all.dto';
@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private _http: HttpClient) { }

  //NOTA DE VENTA
  NotaVentaGetAll(request: string): Observable<BaseResponse<NovaVentaGetAllDto[]>> {
    return this._http.get<BaseResponse<NovaVentaGetAllDto[]>>(`${env.base_url}Venta/NotaVentaGetAll${request}`);
  }
}
