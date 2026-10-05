import { Component } from '@angular/core';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

   students: any[] = [];

  constructor(public studentService: StudentService) {

    this.students = this.studentService.getStudents();

  }
}
