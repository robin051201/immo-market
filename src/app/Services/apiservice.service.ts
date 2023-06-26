import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Property } from "./DTO's/GetAllPropertiesDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private url = "http://194.163.139.19:6600/api/";

  constructor(private http: HttpClient) { }

  //getDataBySearchterm(searchText?: string): Observable<Property[]> {
  //  let params = new HttpParams();
  //  if (searchText) {
  //    params = params.append("Main/" + 'City/', searchText);
  //  }
  //  return this.http.get<Property[]>(this.url, { params });
  //}

  getDataBySearchterm(searchText?: string): Observable<Property[]> {
    let requestUrl = this.url;
    if (searchText) {
      requestUrl += 'Main/City/' + searchText;
    }
    return this.http.get<Property[]>(requestUrl);
  }

  getData(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + "MainView/");
  }

}
