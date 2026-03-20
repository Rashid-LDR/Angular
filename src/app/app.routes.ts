import { Routes } from '@angular/router';

export const routes: Routes = [
    
   {
        path:"",
        pathMatch:"full",
        loadComponent:()=> {
           return import('./Component/home-comopnent/home-comopnent').then((m)=> m.HomeComopnent)
        }
   },   
   {
        path:"todos",
        loadComponent:()=> {
            return import('./Component/todos-component/todos-component').then((m)=>m.TodosComponent)
        },
    }
    ,   
   {
        path:"counter",
        loadComponent:()=> {
            return import('./Component/counter/counter').then((m)=>m.Counter)
        },
    }
    ,   
   {
        path:"test",
        loadComponent:()=> {
            return import('./Component/test-component/test-component').then((m)=>m.TestComponent)
        },
    }
    ,   
   {
        path:"demo",
        loadComponent:()=> {
            return import('./Component/demo-component/demo-component').then((m)=>m.DemoComponent)
        },
   }

];
