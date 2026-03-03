import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComopnent } from "./Component/home-comopnent/home-comopnent";
import { Greeding } from './Component/greeding/greeding';


@Component({
  selector: 'app-root',
  imports: [HomeComopnent,Greeding],
  template: `<app-home-comopnent/> <app-greeding/> `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp');
}
