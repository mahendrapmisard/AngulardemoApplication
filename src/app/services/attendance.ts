import { Injectable } from '@angular/core';
// import { SharedService } from './shared.service';
import { SharedService } from './shared-service';

export type AttendanceStatus = 'Present' | 'Absent';

interface AttendanceRecord {
  studentId: number;
  studentName: string;
  subject: string;
  date: string;
  status: AttendanceStatus;
}

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private attendanceRecords: AttendanceRecord[] = [];

  constructor(private sharedService: SharedService) {}

  getLast10Days(): string[] {
    const dates: string[] = [];
    const today = new Date();

    for (let i = 9; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);

      dates.push(this.formatDate(date));
    }

    return dates;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private ensureDummyAttendance(): void {
    const students = this.sharedService.students;
    const dates = this.getLast10Days();

    for (const student of students) {
      if (!student.selectedSubject) {
        continue;
      }
      for (let i = 0; i < dates.length - 1; i++) {
        const date = dates[i];

        const alreadyExists = this.attendanceRecords.some(
          (record) => record.studentId === student.id && record.date === date,
        );

        if (alreadyExists) {
          continue;
        }

        const status: AttendanceStatus = (student.id + i) % 5 === 0 ? 'Absent' : 'Present';

        this.attendanceRecords.push({
          studentId: student.id,
          studentName: student.name,
          subject: student.selectedSubject,
          date,
          status,
        });
      }
    }
  }
  markAttendance(
    studentId: number,
    studentName: string,
    subject: string,
    date: string,
    status: AttendanceStatus,
  ): void {
    const existingRecord = this.attendanceRecords.find(
      (record) => record.studentId === studentId && record.date === date,
    );

    if (existingRecord) {
      existingRecord.studentName = studentName;
      existingRecord.subject = subject;
      existingRecord.status = status;
    } else {
      this.attendanceRecords.push({
        studentId,
        studentName,
        subject,
        date,
        status,
      });
    }
  }

  getAttendanceStatus(studentId: number, subject: string, date: string): string {
    this.ensureDummyAttendance();

    const record = this.attendanceRecords.find(
      (item) => item.studentId === studentId && item.subject === subject && item.date === date,
    );

    return record ? record.status : 'Not Marked';
  }

  getAttendanceReport() {
    this.ensureDummyAttendance();

    const dates = this.getLast10Days();

    return this.sharedService.students.map((student) => {
      const attendance: Record<string, string> = {};

      for (const date of dates) {
        const record = this.attendanceRecords.find(
          (item) => item.studentId === student.id && item.date === date,
        );

        attendance[date] = record ? record.status : 'Not Marked';
      }

      return {
        id: student.id,
        name: student.name,
        selectedSubject: student.selectedSubject,
        attendance,
      };
    });
  }
}
