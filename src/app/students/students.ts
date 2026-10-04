import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  students = [
    {
      name: 'madan',
      marks: 75,
    },
    {
      name: 'mahendra',
      marks: 35,
    },
    {
      name: 'giri',
      marks: 90,
    },
    {
      name: 'pavithra',
      marks: 55,
    },
    {
      name: 'supraja',
      marks: 70,
    },
  ];

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
