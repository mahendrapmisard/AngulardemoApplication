import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  subjects = ['c sharp', 'Angular', 'SQL'];
  teachers = [
    {
      id: 1,
      name: 'Madan',
      subject: 'c sharp',
    },
    {
      id: 2,
      name: 'Manvika',
      subject: 'Angular',
    },
    {
      id: 3,
      name: 'Kavya',
      subject: 'SQL',
    },
  ];

  students = [
    {
      id: 1,
      name: 'Mahendra',
      selectedSubject: '',
    },
    {
      id: 2,
      name: 'siva',
      selectedSubject: '',
    },
    {
      id: 3,
      name: 'Giri',
      selectedSubject: '',
    },
    {
      id: 4,
      name: 'sandep',
      selectedSubject: '',
    },
    {
      id: 5,
      name: 'Vamsi',
      selectedSubject: '',
    },
    {
      id: 6,
      name: 'arsheed',
      selectedSubject: '',
    },
  ];

  selectSubject(student: any, subject: string) {
    student.selectedSubject = subject;
  }

  getStudentsBySubject(subject: string) {
    return this.students.filter((student) => student.selectedSubject === subject);
  }

  getTeacherBySubject(subject: string) {
    return this.teachers.find((teacher) => teacher.subject === subject);
  }
}
