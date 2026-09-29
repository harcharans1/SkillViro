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
  private readonly service = inject(ProjectService);
  projectId = computed(() => this.route.snapshot.paramMap.get('id') ?? '');
  project = computed(() => this.service.getById(this.projectId()));
  completed = signal<number[]>([]);

  toggleTask(index: number): void {
    this.completed.update(items => items.includes(index) ? items.filter(i => i !== index) : [...items, index]);
  }

  isComplete(index: number): boolean { return this.completed().includes(index); }
  progress = computed(() => {
    const p = this.project();
    return p ? Math.round((this.completed().length / p.tasks.length) * 100) : 0;
  });
}
