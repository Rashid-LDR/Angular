import { Component, input } from '@angular/core';
import { Greeding } from '../greeding/greeding';

@Component({
  selector: 'app-home-comopnent',
  imports: [Greeding],
  templateUrl: './home-comopnent.html',
  styleUrl: './home-comopnent.css',
})
export class HomeComopnent {
  title=input("Hello Home Component")
}
