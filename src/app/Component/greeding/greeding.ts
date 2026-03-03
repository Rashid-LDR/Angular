import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeding',
  imports: [],
  templateUrl: './greeding.html',
  styleUrl: './greeding.css',
})
export class Greeding {
  title=input()
  keyUpHandler(event:KeyboardEvent){
    console.log("Event Key Is Pressed",event.key)
  }
}
