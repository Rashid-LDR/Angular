import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DemoService } from '../../services/demo-service';
import { DemoModel } from '../../models/DemoModel';

@Component({
  selector: 'app-demo-component',
  imports: [CommonModule],
  templateUrl: './demo-component.html',
  styleUrl: './demo-component.css',
})
export class DemoComponent implements OnInit {

  demoService = inject(DemoService);
  demoitems=signal<Array<DemoModel>>([]);
  ngOnInit(): void {
    this.demoService.getdataFromAPI().subscribe((data) => {
      this.demoitems.set(data);
      console.log(this.demoitems());
    });

  }
}
