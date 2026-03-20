import { inject, Injectable } from '@angular/core';
import { Todos } from '../models/todosmodel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Todes {
  
  todoitems  :Array<Todos>=[]
  http=inject(HttpClient);
  
  getdataFromAPI()
  {
    const url= `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todos>>(url);
  }

  
}
