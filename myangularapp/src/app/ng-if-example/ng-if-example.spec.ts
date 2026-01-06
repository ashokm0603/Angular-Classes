import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExample } from './ng-if-example';

describe('NgIfExample', () => {
  let component: NgIfExample;
  let fixture: ComponentFixture<NgIfExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
