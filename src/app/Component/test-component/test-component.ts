import { Component, inject,  OnInit, signal } from '@angular/core';
import { TestModel } from '../../models/testmodel';
import { TestService } from '../../services/test-service';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent implements OnInit {

  testservice=inject(TestService);
  testitems=signal<Array<TestModel>>([]);

  ngOnInit(): void {
    this.testservice.getdataFromTestApi().pipe(catchError((error) => {
      console.error('Error fetching test data:', error);
      return [];
    } )).subscribe((data: TestModel[]) => {
      this.testitems.set(data);
      console.log('Test data fetched successfully:', data);
    });
  }
}
