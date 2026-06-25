export type AppScreen = 'entrance' | 'home' | 'project';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  image: string;
  year: number;
}

export interface MaterialItem {
  name: string;
  description: string;
  image: string;
  alt: string;
}
