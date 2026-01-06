import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCrudOperations } from './angular-crud-operations';

describe('AngularCrudOperations', () => {
  let component: AngularCrudOperations;
  let fixture: ComponentFixture<AngularCrudOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCrudOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCrudOperations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
