import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home-comopnent',
  imports: [],
  templateUrl: './home-comopnent.html',
  styleUrl: './home-comopnent.css',
})
export class HomeComopnent {
  title=input("Hello  Component")
}
