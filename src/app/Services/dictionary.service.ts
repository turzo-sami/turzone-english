import { Injectable } from '@angular/core';
import { MasterService } from './master.service';
import { Observer } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DictionaryService {

  api_url = "https://api.datamuse.com/words";

  httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private masterService: MasterService) { }


  getHomophones(searchtext) {
    let params = new HttpParams().set("rel_hom", searchtext);
    return this.httpClient.get(this.api_url, { params })
  }
  
  getRhymingWords(searchtext) {
    let params = new HttpParams().set("rel_rhy", searchtext);
    return this.httpClient.get(this.api_url, { params })
  }
  
  getSynonym(searchtext) {
    let params = new HttpParams().set("rel_syn", searchtext);
    return this.httpClient.get(this.api_url, { params })
  }

  getAntonym(searchtext) {
    let params = new HttpParams().set("rel_ant", searchtext);
    return this.httpClient.get(this.api_url, { params })
  }


}


