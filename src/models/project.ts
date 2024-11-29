export interface Project {
  title: string;
  period: string;
  stacks: React.ReactNode[];
  hero: React.ReactNode;
  desc: React.ReactNode;
  github?: string;
  link?: string;
}
