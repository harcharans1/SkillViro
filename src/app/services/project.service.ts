import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projects: Project[] = [
    {
      id: 'e-commerce-platform',
      title: 'E-Commerce Platform',
      description:
        'Build a complete modern online shopping platform with products, cart, checkout and an admin dashboard.',
      category: 'Full Stack',
      difficulty: 'Advanced',
      technologies: ['Angular', 'Dart', 'Database', 'API'],
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
      ],
      tasks: [
        'Set up the project structure',
        'Create the homepage',
        'Build the product section',
        'Add authentication',
        'Create shopping cart',
        'Build checkout page',
        'Connect database',
        'Test the complete application'
      ]
    },
    {
      id: 'task-management-app',
      title: 'Task Management App',
      description:
        'Create a modern productivity application for managing daily tasks and projects.',
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
        'Create reusable UI',
        'Manage application state'
      ],
      tasks: [
        'Set up the Angular project',
        'Create the dashboard layout',
        'Build the task creation form',
        'Display tasks in a list',
        'Add task status and filtering',
        'Add edit and delete actions',
        'Save task data',
        'Test the complete application'
      ]
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description:
        'Create a professional portfolio website to showcase your skills and projects.',
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
        'Create reusable sections',
        'Deploy a website'
      ],
      tasks: [
        'Create the project structure',
        'Build the navigation bar',
        'Create the hero section',
        'Add skills and services sections',
        'Build the projects section',
        'Create the contact section',
        'Make the website responsive',
        'Deploy the portfolio website'
      ]
    },
    {
      id: 'skill-learning-platform',
      title: 'Skill Learning Platform',
      description:
        'Build a complete learning platform with courses, projects and user dashboards.',
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
        'Create dashboard-based applications',
        'Understand full-stack application architecture'
      ],
      tasks: [
        'Set up the learning platform structure',
        'Create the course catalogue',
        'Build the course details page',
        'Create user authentication',
        'Build the student dashboard',
        'Connect the REST API',
        'Connect the database',
        'Test and deploy the platform'
      ]
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
