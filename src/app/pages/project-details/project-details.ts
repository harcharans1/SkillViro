import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {

  private route = inject(ActivatedRoute);

  private projects: Project[] = [

    {
      id: 'e-commerce-platform',

      title: 'E-Commerce Platform',

      description:
        'Build a complete modern online shopping platform with products, cart, checkout and an admin dashboard.',

      category: 'Full Stack',

      difficulty: 'Advanced',

      technologies: [
        'Angular',
        'Dart',
        'Database',
        'API'
      ],

      duration: '4 Weeks',

      requirements: [
        'Basic HTML, CSS and JavaScript',
        'Angular fundamentals',
        'Basic database knowledge',
        'Basic API understanding'
      ],

      outcomes: [
        'Build a complete shopping platform',
        'Understand full-stack architecture',
        'Create a portfolio-ready project',
        'Work with APIs and databases'
      ]
    },

    {
      id: 'task-management-app',

      title: 'Task Management App',

      description:
        'Create a modern productivity application for managing daily tasks and projects.',

      category: 'Web App',

      difficulty: 'Intermediate',

      technologies: [
        'Angular',
        'TypeScript',
        'CSS'
      ],

      duration: '2 Weeks',

      requirements: [
        'HTML and CSS basics',
        'JavaScript fundamentals',
        'Angular basics'
      ],

      outcomes: [
        'Build interactive web applications',
        'Work with Angular components',
        'Create reusable UI',
        'Manage application state'
      ]
    },

    {
      id: 'portfolio-website',

      title: 'Portfolio Website',

      description:
        'Create a professional portfolio website to showcase your skills and projects.',

      category: 'Frontend',

      difficulty: 'Beginner',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript'
      ],

      duration: '1 Week',

      requirements: [
        'Basic HTML',
        'Basic CSS',
        'Basic JavaScript'
      ],

      outcomes: [
        'Create a professional portfolio',
        'Build responsive layouts',
        'Create reusable sections',
        'Deploy a website'
      ]
    },

    {
      id: 'skill-learning-platform',

      title: 'Skill Learning Platform',

      description:
        'Build a complete learning platform with courses, projects and user dashboards.',

      category: 'Full Stack',

      difficulty: 'Advanced',

      technologies: [
        'Angular',
        'API',
        'Database'
      ],

      duration: '5 Weeks',

      requirements: [
        'Angular fundamentals',
        'REST API basics',
        'Database fundamentals'
      ],

      outcomes: [
        'Build a complete learning platform',
        'Work with APIs',
        'Create dashboard-based applications',
        'Understand full-stack application architecture'
      ]
    }

  ];


  /*
   * URL vicho project ID read karda
   *
   * Example:
   * /projects/e-commerce-platform
   *
   * ID:
   * e-commerce-platform
   */
  projectId = computed(() =>
    this.route.snapshot.paramMap.get('id') ?? ''
  );


  /*
   * ID de according project find karda
   */
  project = computed(() =>
    this.projects.find(
      project => project.id === this.projectId()
    )
  );

}