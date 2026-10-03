import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
   // Student data
  students = [
    {
      name: 'Mahendra',
      marks: 75
    },
    {
      name: 'Rahul',
      marks: 35
    },
    {
      name: 'Priya',
      marks: 90
    },
    {
      name: 'Anil',
      marks: 55
    }
  ];


  // Student-specific logic
  getResult(marks: number) {

    if (marks >= 40) {
      return 'Pass';
    }

    return 'Fail';
  }


  // Student-specific logic
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


  // Common logic
  getName(name: string) {

    return name.toUpperCase();

  }
}
