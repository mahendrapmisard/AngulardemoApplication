import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceAdmin } from './attendance-admin';

describe('AttendanceAdmin', () => {
  let component: AttendanceAdmin;
  let fixture: ComponentFixture<AttendanceAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(AttendanceAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
