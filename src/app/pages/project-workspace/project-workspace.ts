import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-workspace',
  imports: [RouterLink],
  templateUrl: './project-workspace.html',
  styleUrl: './project-workspace.css'
})
export class ProjectWorkspace {

  private readonly route = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectService);

  projectId = computed(() =>
    this.route.snapshot.paramMap.get('id') ?? ''
  );

  project = computed(() =>
    this.projectService.getById(this.projectId())
  );

  tasks = computed(() =>
    this.project()?.tasks ?? []
  );

  completedTasks = signal<number[]>([]);

  toggleTask(index: number): void {
    this.completedTasks.update(completed => {
      if (completed.includes(index)) {
        return completed.filter(taskIndex => taskIndex !== index);
      }

      return [...completed, index];
    });
  }

  isTaskCompleted(index: number): boolean {
    return this.completedTasks().includes(index);
  }

  progress = computed(() => {
    const totalTasks = this.tasks().length;

    if (totalTasks === 0) {
      return 0;
    }

    return Math.round(
      (this.completedTasks().length / totalTasks) * 100
    );
  });
}
