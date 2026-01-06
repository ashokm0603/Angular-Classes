import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenBinding } from './even-binding';

describe('EvenBinding', () => {
  let component: EvenBinding;
  let fixture: ComponentFixture<EvenBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
