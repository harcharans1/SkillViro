import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/cards/project-card/project-card';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  private readonly projectService = inject(ProjectService);

  searchQuery = signal('');
  selectedFilter = signal('All Projects');

  projects = signal(this.projectService.getAll());

  filteredProjects = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.selectedFilter();

    return this.projects().filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.difficulty.toLowerCase().includes(query) ||
        project.technologies.some(tech =>
          tech.toLowerCase().includes(query)
        );

      const matchesFilter =
        filter === 'All Projects' ||
        project.category === filter ||
        project.difficulty === filter;

      return matchesSearch && matchesFilter;
    });
  });

  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  setFilter(filter: string): void {
    this.selectedFilter.set(filter);
  }
}
