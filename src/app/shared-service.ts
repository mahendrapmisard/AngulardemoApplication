import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // selectedStudent: any = null;

  // selectedSubject = '';

  // subjects = ['c sharp', 'Angular', 'SQL'];

  // teachers = [
  //   {
  //     id: 1,
  //     name: 'Madan',
  //     subject: 'c sharp',
  //   },
  //   {
  //     id: 2,
  //     name: 'Manvika',
  //     subject: 'Angular',
  //   },
  //   {
  //     id: 3,
  //     name: 'Kavya',
  //     subject: 'SQL',
  //   },
  // ];

  // students = [
  //   {
  //     id: 1,
  //     name: 'Mahendra',
  //     subjects: ['c sharp', 'Angular'],
  //   },
  //   {
  //     id: 2,
  //     name: 'Supraja',
  //     subjects: ['Angular', 'c sharp'],
  //   },
  //   {
  //     id: 3,
  //     name: 'Giri',
  //     subjects: ['SQL'],
  //   },
  //   {
  //     id: 4,
  //     name: 'Pavithra',
  //     subjects: ['Angular', 'SQL'],
  //   },
  //   {
  //     id: 5,
  //     name: 'Vamsi',
  //     subjects: ['Angular'],
  //   },
  //   {
  //     id: 6,
  //     name: 'Rahul',
  //     subjects: ['c sharp', 'SQL'],
  //   },
  //   {
  //     id: 7,
  //     name: 'Kiran',
  //     subjects: ['SQL'],
  //   },
  //   {
  //     id: 8,
  //     name: 'Sneha',
  //     subjects: ['c sharp'],
  //   },
  // ];

  // selectStudent(student: any) {
  //   this.selectedStudent = student;
  // }

  // getStudentsBySubject(subject: string) {
  //   return this.students.filter((student) => student.subjects.includes(subject));
  // }

  // selectSubject(subject: string) {
  //   this.selectedSubject = subject;
  // }

  // clearSelectedStudent() {
  //   this.selectedStudent = null;
  // }

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
