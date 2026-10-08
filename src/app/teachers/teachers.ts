import { Component } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  selector: 'app-teachers',
  imports: [],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css'
})
export class Teachers {

  constructor(
    public sharedService: SharedService
  ) {}

  showStudents(teacher: any) {

    teacher.showStudents = true;

  }

  hideStudents(teacher: any) {

    teacher.showStudents = false;

  }

}