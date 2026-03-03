import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greeding } from './greeding';

describe('Greeding', () => {
  let component: Greeding;
  let fixture: ComponentFixture<Greeding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greeding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Greeding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
