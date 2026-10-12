import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from './students/students';
import { Teachers } from './teachers/teachers';
import { Subjects } from './subjects/subjects';
import { AttendanceAdmin } from './attendance-admin/attendance-admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students, Teachers, Subjects, AttendanceAdmin],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-mobile-app');
}
