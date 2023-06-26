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

  getProperty(id: number): Observable<Property[]> {
    let requestUrl = this.url;
    if (id) {
      requestUrl += 'Id/' + id;
    }
    return this.http.get<Property[]>(requestUrl);
  }


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
