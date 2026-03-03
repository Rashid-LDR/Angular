import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComopnent } from './home-comopnent';

describe('HomeComopnent', () => {
  let component: HomeComopnent;
  let fixture: ComponentFixture<HomeComopnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComopnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComopnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
