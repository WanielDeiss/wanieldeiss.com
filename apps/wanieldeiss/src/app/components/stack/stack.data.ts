export interface StackGroup {
  readonly title: string;
  readonly skills: readonly string[];
}

export const STACK: readonly StackGroup[] = [
  {
    title: 'Frontend',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'NgRx', 'Nx'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'REST', 'GraphQL'],
  },
  {
    title: 'Data',
    skills: ['Python', 'Pandas', 'SQL', 'ETL Pipelines', 'BigQuery'],
  },
  {
    title: 'Leadership',
    skills: [
      'Agile / Scrum',
      'Code Reviews',
      'Mentoring',
      'Architecture Decisions',
      'Hiring',
    ],
  },
];
