import { Component, inject, OnInit, signal } from '@angular/core';
import { Todes } from '../../services/todes';
import { CommonModule } from '@angular/common';
import { Todos } from '../../models/todosmodel';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-todos-component',
  imports: [CommonModule],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.css',
})
export class TodosComponent implements OnInit {
  todosService = inject(Todes);

  Todoitems = signal<Array<Todos>>([]); 

  ngOnInit(): void {
    this.todosService.getdataFromAPI().pipe(catchError((error) => {
      console.error('Error fetching todo data:', error);
      return [];
    })).subscribe((todos) => {
      this.Todoitems.set(todos);
    });
  }
}
