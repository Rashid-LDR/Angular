import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DemoModel } from '../models/DemoModel';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  http=inject(HttpClient);
  demodata :Array<DemoModel>=[]

  getdataFromAPI()
  {
    const url= `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<DemoModel>>(url);
  }

  
}
