/**
 * Single source of truth for the Experience timeline. Edit this file to
 * add, remove, or reorder entries — the component renders whatever the
 * array contains, in order.
 */
export interface Experience {
  readonly from: string;
  readonly to: string;
  readonly role: string;
  readonly company: string;
  readonly highlights: readonly string[];
}

export const EXPERIENCE: readonly Experience[] = [
  {
    from: '2026',
    to: 'Present',
    role: 'Circle Lead',
    company: 'ADITO Software GmbH',
    highlights: [
      'Technical leadership of a cross-functional Kanban team building the internal web client on the ADITO CRM platform (Rhino/JavaScript, MariaDB).',
      'Establishing engineering practices across code review, testing strategies, and technical documentation.',
      'Aligning Product Management, UX, and Development while identifying and reducing technical debt in the existing codebase.',
    ],
  },
  {
    from: '2018',
    to: '2025',
    role: 'Team Lead',
    company: 'Grollmus München GmbH',
    highlights: [
      'Led two cross-functional Scrum teams (up to 7 engineers) delivering Angular-based web applications.',
      'Planned and executed the migration of a 500+ component application from AngularJS to Angular, including team development and risk management.',
      'Built CI/CD pipelines on Azure DevOps and cloud infrastructure with Terraform; member of the internal Architecture Board since 2020.',
      'Ran internal trainings on architecture, software supply chains, and web fundamentals; actively involved in hiring, screening, and onboarding.',
    ],
  },
  {
    from: '2016',
    to: '2018',
    role: 'Head of Web Development',
    company: 'SPIEGLHOF media GmbH',
    highlights: [
      'Built and led the web development team from the ground up.',
      'Defined coding guidelines and training structures around React, Node.js, and MongoDB.',
    ],
  },
];
