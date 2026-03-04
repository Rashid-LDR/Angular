import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header-component/header-component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `<app-header-component/> <router-outlet/> `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp');
}
