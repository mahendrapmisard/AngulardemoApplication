import { Component } from '@angular/core';
import { SharedService } from '../services/shared-service';
import { AttendanceService } from '../services/attendance';
@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css',
})
export class Teachers {
  selectedDate = this.getTodayDate();

  constructor(
    public sharedService: SharedService,
    public attendanceService: AttendanceService,
  ) {}

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  isSubjectEnabled(subject: string): boolean {
    return this.sharedService.getEnabledSubjects().some((item) => item.name === subject);
  }

  getStudentsBySubject(subject: string) {
    return this.sharedService.getStudentsBySubject(subject);
  }

  markAttendance(student: any, subject: string, status: 'Present' | 'Absent'): void {
    this.attendanceService.markAttendance(
      student.id,
      student.name,
      subject,
      this.selectedDate,
      status,
    );
  }

  getAttendanceStatus(student: any, subject: string): string {
    return this.attendanceService.getAttendanceStatus(student.id, subject, this.selectedDate);
  }
}
