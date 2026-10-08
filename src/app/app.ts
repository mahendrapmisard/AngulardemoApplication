import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from './students/students';
import { Teachers } from './teachers/teachers';
import { Subjects } from './subjects/subjects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students, Teachers , Subjects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-mobile-app');
}
