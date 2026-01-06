import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsersData } from './api-users-data';

describe('ApiUsersData', () => {
  let component: ApiUsersData;
  let fixture: ComponentFixture<ApiUsersData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUsersData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUsersData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
