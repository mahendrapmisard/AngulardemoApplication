
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AttendanceService } from '../services/attendance';

@Component({
  selector: 'app-attendance-admin',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './attendance-admin.html',
  styleUrl: './attendance-admin.css'
})
export class AttendanceAdmin {
  constructor(public attendanceService: AttendanceService) {
    
  }

  get dates(): string[] {
    return this.attendanceService.getLast10Days();
  }

  get report() {
    return this.attendanceService.getAttendanceReport();
  }
}