import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  options: any={
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(
    private http: HttpClient
  ) { }


  post(url: string, body: any, response?: any) {
    // this.resetTimer();
    if (response !== undefined) {
      return this.http.post(url, body,this.options);
    }
    return this.http.post(url, body, this.options);
  }

  patch(url: string, body: any, params: any, response?: any) {
    //this.resetTimer();
    if (response !== undefined) {
      return this.http.patch(url, body,this.options);
    }
    return this.http.patch(url, body, this.options);
  }

  get(url: string, params?: any, response?: any) {
    // this.resetTimer();
    this.options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    };
    if (params !== undefined) {
      this.options.params = params;
    }
    if (response !== undefined) {
      this.options.observe = response;
      return this.http.get(url, this.options);
    }
    return this.http.get(url, this.options);
  }
}
