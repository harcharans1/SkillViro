import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [RouterLink],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
}
