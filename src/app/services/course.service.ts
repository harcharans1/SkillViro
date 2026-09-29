import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly courses: Course[] = [
    { id: 'web-development', title: 'Complete Web Development', description: 'HTML, CSS and JavaScript from fundamentals to real projects.', category: 'Web Development', level: 'Beginner', lessons: 48, duration: '8 Weeks', price: 0, accent: '01' },
    { id: 'javascript', title: 'JavaScript Mastery', description: 'Modern JavaScript, DOM, events, async code and practical projects.', category: 'Programming', level: 'Intermediate', lessons: 56, duration: '9 Weeks', price: 499, accent: '02' },
    { id: 'angular', title: 'Angular Professional', description: 'Build production-ready Angular applications with routing and services.', category: 'Frontend', level: 'Intermediate', lessons: 42, duration: '7 Weeks', price: 799, accent: '03' },
    { id: 'full-stack', title: 'Full Stack Application', description: 'Frontend, APIs, database architecture and deployment through one project.', category: 'Full Stack', level: 'Advanced', lessons: 64, duration: '12 Weeks', price: 1299, accent: '04' }
  ];

  getAll(): Course[] { return this.courses; }
}
