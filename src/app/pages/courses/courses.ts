import { Component, computed, inject, signal } from '@angular/core';
import { CourseCard } from '../../shared/cards/course-card/course-card';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [CourseCard],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  private readonly service = inject(CourseService);
  query = signal('');
  selected = signal('All');
  categories = ['All', 'Web Development', 'Programming', 'Frontend', 'Full Stack'];

  courses = signal(this.service.getAll());

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const category = this.selected();
    return this.courses().filter(course =>
      (category === 'All' || course.category === category) &&
      (!q || `${course.title} ${course.description} ${course.category} ${course.level}`.toLowerCase().includes(q))
    );
  });

  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
