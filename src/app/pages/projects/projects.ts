import { Component, computed, signal } from '@angular/core';
import { ProjectCard } from '../../shared/cards/project-card/project-card';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  searchQuery = signal('');

  selectedFilter = signal('All Projects');

  projects = signal<Project[]>([
    {
      id: 'e-commerce-platform',
      title: 'E-Commerce Platform',
      description:
        'Build a complete online shopping platform with products, cart and checkout.',
      category: 'Full Stack',
      difficulty: 'Advanced',
      technologies: ['Angular', 'Dart', 'Database'],
      duration: '4 Weeks',

      requirements: [
        'Basic HTML, CSS and JavaScript',
        'Angular fundamentals',
        'Basic database knowledge'
      ],

      outcomes: [
        'Build a complete shopping platform',
        'Understand full-stack architecture',
        'Create a portfolio-ready project'
      ]
    },

    {
      id: 'task-management-app',
      title: 'Task Management App',
      description:
        'Create a modern productivity application for managing daily tasks.',
      category: 'Web App',
      difficulty: 'Intermediate',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      duration: '2 Weeks',

      requirements: [
        'HTML and CSS basics',
        'JavaScript fundamentals',
        'Angular basics'
      ],

      outcomes: [
        'Build interactive web applications',
        'Work with Angular components',
        'Create reusable UI'
      ]
    },

    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description:
        'Create a professional portfolio website to showcase your skills.',
      category: 'Frontend',
      difficulty: 'Beginner',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      duration: '1 Week',

      requirements: [
        'Basic HTML',
        'Basic CSS',
        'Basic JavaScript'
      ],

      outcomes: [
        'Create a professional portfolio',
        'Build responsive layouts',
        'Deploy a website'
      ]
    },

    {
      id: 'skill-learning-platform',
      title: 'Skill Learning Platform',
      description:
        'Build a complete learning platform with courses and user dashboards.',
      category: 'Full Stack',
      difficulty: 'Advanced',
      technologies: ['Angular', 'API', 'Database'],
      duration: '5 Weeks',

      requirements: [
        'Angular fundamentals',
        'REST API basics',
        'Database fundamentals'
      ],

      outcomes: [
        'Build a complete learning platform',
        'Work with APIs',
        'Create dashboard-based applications'
      ]
    }
  ]);

  filteredProjects = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.selectedFilter();

    return this.projects().filter(project => {

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
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