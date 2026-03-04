import { Routes } from '@angular/router';

export const routes: Routes = [
    
   {
        path:"",
        pathMatch:"full",
        loadComponent:()=> {
           return import('../app/Component/home-comopnent/home-comopnent').then((m)=> m.HomeComopnent)
        }
   },   
   {
        path:"todos",
        loadComponent:()=> {
            return import('../app/Component/todos/todos').then((m)=>m.Todos)
        },
    }
    

];
