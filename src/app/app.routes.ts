import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'courses', loadComponent: () => import('./pages/courses/courses').then(m => m.Courses) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
  { path: 'projects/:id/workspace', loadComponent: () => import('./pages/project-workspace/project-workspace').then(m => m.ProjectWorkspace) },
  { path: 'projects/:id', loadComponent: () => import('./pages/project-details/project-details').then(m => m.ProjectDetails) },
  { path: 'tools', loadComponent: () => import('./pages/tools/tools').then(m => m.Tools) },
  { path: 'career', loadComponent: () => import('./pages/career/career').then(m => m.Career) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.Register) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
  { path: '**', redirectTo: '' }
];
