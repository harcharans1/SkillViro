export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies: string[];
  duration: string;
  requirements: string[];
  outcomes: string[];
  tasks: string[];
}
