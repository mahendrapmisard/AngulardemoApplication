import { Component } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  selector: 'app-teachers',
  imports: [],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css',
})
export class Teachers {
  constructor(public sharedService: SharedService) {}
  selectedStudents: any[] = [];

  selectedTeacher: any = null;

  showStudents(teacher: any) {
    this.selectedTeacher = teacher;

    this.selectedStudents = this.sharedService.getStudentsBySubject(teacher.subject);
  }
}
