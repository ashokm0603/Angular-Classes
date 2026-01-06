import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeControl } from './employee-control';

describe('EmployeeControl', () => {
  let component: EmployeeControl;
  let fixture: ComponentFixture<EmployeeControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
