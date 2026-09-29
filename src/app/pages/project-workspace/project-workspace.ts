import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-workspace',
  imports: [RouterLink],
  templateUrl: './project-workspace.html',
  styleUrl: './project-workspace.css'
})
export class ProjectWorkspace {

  private route = inject(ActivatedRoute);

  /* ================================
     PROJECT ID
  ================================= */

  projectId = computed(() =>
    this.route.snapshot.paramMap.get('id') ?? ''
  );


  /* ================================
     PROJECT DATA
  ================================= */

  projectTitle = computed(() => {

    const id = this.projectId();

    const titles: Record<string, string> = {
      'e-commerce-platform': 'E-Commerce Platform',
      'task-management-app': 'Task Management App',
      'portfolio-website': 'Portfolio Website',
      'skill-learning-platform': 'Skill Learning Platform'
    };

    return titles[id] ?? 'Project Workspace';
  });


  /* ================================
     TASKS
  ================================= */

  tasks = [
    'Set up the project structure',
    'Create the homepage',
    'Build the product section',
    'Add authentication',
    'Create shopping cart',
    'Build checkout page',
    'Connect database',
    'Test the complete application'
  ];


  /* ================================
     COMPLETED TASKS
  ================================= */

  completedTasks = signal<number[]>([]);


  /* ================================
     TOGGLE TASK
  ================================= */

  toggleTask(index: number): void {

    this.completedTasks.update(completed => {

      if (completed.includes(index)) {

        return completed.filter(
          taskIndex => taskIndex !== index
        );

      }

      return [...completed, index];

    });

  }


  /* ================================
     CHECK TASK
  ================================= */

  isTaskCompleted(index: number): boolean {

    return this.completedTasks().includes(index);

  }


  /* ================================
     PROGRESS
  ================================= */

  progress = computed(() => {

    if (this.tasks.length === 0) {
      return 0;
    }

    return Math.round(
      (this.completedTasks().length / this.tasks.length) * 100
    );

  });

}