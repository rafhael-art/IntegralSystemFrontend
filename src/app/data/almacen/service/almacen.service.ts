import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StockAlmacenFecha } from '../model/stock-almacen-fecha';
import { Observable } from "rxjs";
import { BaseResponse } from "../../../view/common/bases/base-response.interface";
import * as env from "../../../environment/environments";
import { StockAlmacenFechaProducto } from "../model/stock-almacen-fecha-producto";



@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private _http: HttpClient) { }

  StockAlmacenFecha(filter: string): Observable<BaseResponse<StockAlmacenFecha[]>> {
    return this._http.get<BaseResponse<StockAlmacenFecha[]>>(`${env.base_url}Almacen/StockAlmacenFecha?${filter.substring(1)}`);
  }

  StockAlmacenFechaProducto(filter: string): Observable<BaseResponse<StockAlmacenFechaProducto[]>> {
    return this._http.get<BaseResponse<StockAlmacenFechaProducto[]>>(`${env.base_url}Almacen/StockAlmacenFechaProducto?${filter.substring(1)}`);
  }
}
