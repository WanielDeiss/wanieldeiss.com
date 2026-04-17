export interface Project {
  readonly title: string;
  readonly description: string;
  readonly problem: string;
  readonly solution: string;
  readonly impact: string;
  readonly tags: readonly string[];
  readonly url?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: 'Placeholder Project 1',
    description:
      'Kurzbeschreibung des Projekts — was es ist und warum es existiert.',
    problem: 'Platzhalter — welches Problem wurde gelöst.',
    solution:
      'Platzhalter — technischer Ansatz und eingesetzte Technologien.',
    impact: 'Platzhalter — messbares Ergebnis oder Verbesserung.',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    url: 'https://example.com',
  },
  {
    title: 'Placeholder Project 2',
    description:
      'Kurzbeschreibung des Projekts — was es ist und warum es existiert.',
    problem: 'Platzhalter — welches Problem wurde gelöst.',
    solution:
      'Platzhalter — technischer Ansatz und eingesetzte Technologien.',
    impact: 'Platzhalter — messbares Ergebnis oder Verbesserung.',
    tags: ['Node.js', 'PostgreSQL'],
  },
];
