import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComopnent } from "./Component/home-comopnent/home-comopnent";
import { Greeding } from './Component/greeding/greeding';
import { HeaderComponent } from './Component/header-component/header-component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HomeComopnent],
  template: `<app-header-component/> <app-home-comopnent/> `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp');
}
