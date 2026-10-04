import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  imports: [],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css',
})
export class Teachers {
  teachers = [
    {
      name: 'madan',
      salary: 50000,
      experience: 3,
    },
    {
      name: 'manvika',
      salary: 70000,
      experience: 8,
    },
    {
      name: 'kavya',
      salary: 45000,
      experience: 2,
    },
    {
      name: 'vamsi',
      salary: 90000,
      experience: 12,
    },
  ];

  getSalaryAfterBonus(salary: number) {
    return salary + 5000;
  }

  getExperienceLevel(experience: number) {
    if (experience >= 5) {
      return 'Senior';
    }

    return 'Junior';
  }

  getName(name: string) {
    return name.toUpperCase();
  }
}
