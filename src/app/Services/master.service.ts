import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MasterService {

  API_URL(): string { return "http://192.168.42.6:90/api/" };

  httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  get(URL: string): any {

    var data = this.http.get(this.getAPI(URL.trim()), this.httpOptions);
    return data;
  }



  getAPI(url: string) {
    var URL = "";
    if (url.indexOf('/') == 0) URL = this.API_URL + url.substr(1);
    else URL = this.API_URL + url;

    return URL;
  }


}