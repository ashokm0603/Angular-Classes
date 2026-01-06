import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseOver } from './mouse-over';

describe('MouseOver', () => {
  let component: MouseOver;
  let fixture: ComponentFixture<MouseOver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseOver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseOver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
