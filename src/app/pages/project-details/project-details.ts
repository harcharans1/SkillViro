import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {

  private readonly route = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectService);

  projectId = computed(() =>
    this.route.snapshot.paramMap.get('id') ?? ''
  );

  project = computed(() =>
    this.projectService.getById(this.projectId())
  );
}
