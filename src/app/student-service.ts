import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students = [
    {
      name: 'madan',
      marks: 75
    },
    {
      name: 'mahendra',
      marks: 35
    },
    {
      name: 'pavithra',
      marks: 90
    },
    {
      name: 'giri',
      marks: 90
    }
  ];

  getStudents() {
    return this.students;
  }

  getResult(marks: number) {

    if (marks >= 40) {
      return 'Pass';
    }

    return 'Fail';
  }

  getGrade(marks: number) {

    if (marks >= 80) {
      return 'A';
    }

    if (marks >= 60) {
      return 'B';
    }

    if (marks >= 40) {
      return 'C';
    }

    return 'F';
  }

  getName(name: string) {
    return name.toUpperCase();
  }
}
