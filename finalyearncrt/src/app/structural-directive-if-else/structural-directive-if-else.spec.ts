import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveIfElse } from './structural-directive-if-else';

describe('StructuralDirectiveIfElse', () => {
  let component: StructuralDirectiveIfElse;
  let fixture: ComponentFixture<StructuralDirectiveIfElse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveIfElse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveIfElse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
