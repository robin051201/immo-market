import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = "http://194.163.139.19:6600/api/MainView/";
    return this.http.get(url);
  }
}
