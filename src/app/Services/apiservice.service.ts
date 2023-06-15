import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "./DTO's/GetAllPropertiesDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Property[]> {
    let url = "http://194.163.139.19:6600/api/MainView/";
    return this.http.get<Property[]>(url);
  }
}
