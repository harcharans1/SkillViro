import { Component, input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  title = input('Web Development');
  description = input('Learn modern web development from fundamentals to real projects.');
  category = input('Development');
  level = input('Beginner');
  lessons = input(24);
  duration = input('8 Weeks');
  price = input('Free');
}