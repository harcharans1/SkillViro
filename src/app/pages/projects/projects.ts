import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCard } from '../../shared/cards/project-card/project-card';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  query = signal('');
  selected = signal('All');
  filters = ['All', 'Full Stack', 'Web App', 'Frontend', 'Beginner', 'Intermediate', 'Advanced'];
  projects = signal(this.projectService.getAll());

  filteredProjects = computed(() => {
    const q = this.query().trim().toLowerCase();
    const filter = this.selected();
    return this.projects().filter(project => {
      const text = `${project.title} ${project.description} ${project.category} ${project.difficulty} ${project.technologies.join(' ')}`.toLowerCase();
      return (!q || text.includes(q)) && (filter === 'All' || project.category === filter || project.difficulty === filter);
    });
  });

  search(event: Event): void { this.query.set((event.target as HTMLInputElement).value); }
}
