import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

/**
 * Editorial section header with a small accent-coloured eyebrow (index + label)
 * and a large Fraunces headline. Intro copy slots in via `<ng-content>`.
 *
 * Usage:
 *
 * ```html
 * <wd-section-header index="02" title="Experience">
 *   <p>Lede paragraph shown below the headline.</p>
 * </wd-section-header>
 * ```
 */
@Component({
  standalone: true,
  selector: 'wd-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="mb-10 md:mb-14">
      <p
        class="mb-6 text-xs font-medium uppercase tracking-[var(--tracking-eyebrow)] text-fg-muted"
      >
        <span class="text-accent">{{ index() }}</span>
        <span aria-hidden="true" class="mx-2">//</span>
        <span>{{ title() }}</span>
      </p>
      <h2
        class="font-display text-4xl font-light leading-[1.05] tracking-[var(--tracking-display)] text-fg-strong md:text-6xl"
      >
        {{ title() }}
      </h2>
      <div class="mt-6 max-w-prose text-fg-muted">
        <ng-content />
      </div>
    </header>
  `,
})
export class SectionHeaderComponent {
  readonly index = input.required<string>();
  readonly title = input.required<string>();
}
