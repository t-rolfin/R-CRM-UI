import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsFilterComponent } from './leads-filter.component';

describe('LeadsFilterComponent', () => {
  let component: LeadsFilterComponent;
  let fixture: ComponentFixture<LeadsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
