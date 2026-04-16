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
    from: '2022',
    to: 'Present',
    role: 'Placeholder Role — Current',
    company: 'Placeholder Company 1',
    highlights: [
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
    ],
  },
  {
    from: '2018',
    to: '2022',
    role: 'Placeholder Role — Senior',
    company: 'Placeholder Company 2',
    highlights: [
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
    ],
  },
  {
    from: '2015',
    to: '2018',
    role: 'Placeholder Role — Junior',
    company: 'Placeholder Company 3',
    highlights: [
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
      'Platzhalter-Achievement — konkretes Ergebnis, Zahl oder Impact.',
    ],
  },
];
