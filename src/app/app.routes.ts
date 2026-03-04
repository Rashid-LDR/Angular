import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path:"",
    pathMatch:"full",
    loadComponent:()=> {
        return import('../app/Component/home-comopnent/home-comopnent').then((m)=> m.HomeComopnent)
    },

}

];
