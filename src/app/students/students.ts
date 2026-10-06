import { Component } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  students: any[] = [];
   constructor(
    public sharedService: SharedService
  ) {}

  selectSubject(student: any, subject: string) {

    this.sharedService.selectSubject(student, subject);

  }
}
