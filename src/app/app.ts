import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Component/home/home';
import { Index } from './index';

@Component({
  selector: 'app-root',
  imports: [Home,Index],
  template: `<app-home/> <app-index/>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp');
}
