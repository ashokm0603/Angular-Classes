import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailForms } from './email-forms';

describe('EmailForms', () => {
  let component: EmailForms;
  let fixture: ComponentFixture<EmailForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
