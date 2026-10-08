import { Component } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  selector: 'app-subjects',
  imports: [],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css',
})
export class Subjects {
  constructor(public sharedService: SharedService) {}

  enableSubject(subject: any) {
    this.sharedService.enableSubject(subject);
  }

  disableSubject(subject: any) {
    this.sharedService.disableSubject(subject);
  }
}
