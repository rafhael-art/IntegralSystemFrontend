import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as URL from "../../../environment/environments";

@Injectable({
  providedIn: "root"
})
export class DownloadXslxService {
  constructor(private _http: HttpClient) { }

  executeDownload(url: string): Observable<Blob> {
    return this._http.get<Blob>(`${URL}${url}`, {
      responseType: "blob" as "json"
    })
  }
}
