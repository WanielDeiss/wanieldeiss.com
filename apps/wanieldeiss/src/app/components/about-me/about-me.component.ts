import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SectionHeaderComponent,
} from '../section-header/section-header.component';
import { CardComponent } from '../../ui/card/card.component';
import { ContainerComponent } from '../../ui';

interface KeyFact {
  readonly value: string;
  readonly label: string;
}

const KEY_FACTS: readonly KeyFact[] = [
  { value: '6+ years', label: 'Leading developer teams' },
  { value: 'Team Lead', label: 'Current focus' },
  { value: 'München', label: 'Based in Germany' },
];

@Component({
  selector: 'wd-about-me',
  standalone: true,
  imports: [ContainerComponent, SectionHeaderComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <wd-container size="page">
      <wd-section-header index="01" title="About" />

      <div
        class="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1fr_auto] md:items-start md:gap-16"
      >
        <p
          class="max-w-prose font-display text-2xl font-light leading-[1.4] tracking-[var(--tracking-display)] text-fg-strong md:text-3xl"
        >
          Platzhalter — erster Satz zum persönlichen Hintergrund und dem
          Weg, der mich hierher gebracht hat. Platzhalter — zweiter Satz
          zum fachlichen Fokus und dem, was mich an der Arbeit reizt.
          Platzhalter — dritter Satz zu Interessen außerhalb des Codes.
        </p>

        <div
          class="order-first mx-auto md:order-none md:mx-0"
          aria-hidden="true"
        >
          <div
            class="relative aspect-square w-32 overflow-hidden rounded-full border border-border bg-surface-elevated md:w-40"
          >
            <svg
              viewBox="0 0 128 128"
              class="h-full w-full text-fg-subtle"
            >
              <circle
                cx="64"
                cy="50"
                r="22"
                fill="currentColor"
                opacity="0.45"
              />
              <path
                d="M22 120c8-24 24-36 42-36s34 12 42 36"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                opacity="0.45"
              />
            </svg>
          </div>
        </div>
      </div>

      <ul class="mt-12 grid gap-4 sm:grid-cols-3 md:mt-16">
        @for (fact of keyFacts; track fact.label) {
          <wd-card>
            <p
              class="font-display text-2xl font-light tracking-[var(--tracking-display)] text-fg-strong md:text-3xl"
            >
              {{ fact.value }}
            </p>
            <p class="mt-2 text-sm text-fg-muted">{{ fact.label }}</p>
          </wd-card>
        }
      </ul>
    </wd-container>
  `,
})
export class AboutMeComponent {
  protected readonly keyFacts = KEY_FACTS;
}
