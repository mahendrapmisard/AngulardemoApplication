import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  subjects = [
    {
      id: 1,
      name: 'SQL',
      enabled: true,
    },
    {
      id: 2,
      name: 'C Sharp',
      enabled: true,
    },
    {
      id: 3,
      name: 'Angular',
      enabled: false,
    },
    {
      id: 4,
      name: 'Java',
      enabled: false,
    },
    {
      id: 5,
      name: 'Python',
      enabled: false,
    },
  ];

  teachers = [
    {
      id: 1,
      name: 'Madan',
      subject: 'SQL',
      showStudents: false,
    },
    {
      id: 2,
      name: 'Manvika',
      subject: 'C Sharp',
      showStudents: false,
    },
    {
      id: 3,
      name: 'Kavya',
      subject: 'Angular',
      showStudents: false,
    },
    {
      id: 4,
      name: 'Ravi',
      subject: 'Java',
      showStudents: false,
    },
    {
      id: 5,
      name: 'Suresh',
      subject: 'Python',
      showStudents: false,
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
      name: 'Supraja',
      selectedSubject: '',
    },
    {
      id: 3,
      name: 'Giri',
      selectedSubject: '',
    },
    {
      id: 4,
      name: 'Pavithra',
      selectedSubject: '',
    },
    {
      id: 5,
      name: 'Vamsi',
      selectedSubject: '',
    },
    {
      id: 6,
      name: 'Rahul',
      selectedSubject: '',
    },
    {
      id: 7,
      name: 'Kiran',
      selectedSubject: '',
    },
    {
      id: 8,
      name: 'Sneha',
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

  getEnabledSubjects() {
    return this.subjects.filter((subject) => subject.enabled);
  }

  enableSubject(subject: any) {
    subject.enabled = true;
  }

  disableSubject(subject: any) {
    subject.enabled = false;
  }
}
