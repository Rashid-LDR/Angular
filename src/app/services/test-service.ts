import { inject, Injectable } from '@angular/core';
import { TestModel } from '../models/testmodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  testitems:Array<TestModel>=[];
  http=inject(HttpClient);

  getdataFromTestApi(){
    const url=`https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<TestModel>>(url);
  }
  
}
