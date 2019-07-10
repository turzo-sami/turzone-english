import { Injectable } from '@angular/core';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private masterService: MasterService) { }

  getTestData(url: string) { return this.masterService.get(url); }

}
