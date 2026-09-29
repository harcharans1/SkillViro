import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {

  id = input('');

  title = input('E-Commerce Website');

  description = input(
    'Build a complete modern shopping website.'
  );

  category = input('Web Development');

  difficulty = input('Intermediate');

  technologies = input<string[]>([
    'Angular',
    'TypeScript',
    'CSS'
  ]);

  duration = input('2 Weeks');
}