import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SectionHeaderComponent,
} from '../section-header/section-header.component';
import { ContainerComponent } from '../../ui';

@Component({
  selector: 'wd-about-me',
  standalone: true,
  imports: [ContainerComponent, SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <wd-container size="page">
      <div
        class="grid gap-12 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-16 lg:gap-24"
      >
        <div class="md:sticky md:top-28 md:self-start">
          <wd-section-header index="01" title="About" />
        </div>

        <div class="max-w-prose">
          <p
            class="font-display text-2xl font-light leading-[1.35] tracking-[var(--tracking-display)] text-fg-strong md:text-3xl"
          >
            I wrote my first function in 2000 using QBasic — mainly as an
            unconventional way to solve my math homework.
          </p>

          <div
            class="mt-10 space-y-6 text-base leading-[var(--leading-prose)] text-fg-muted md:text-lg"
          >
            <p>
              What started as an experiment quickly turned into a passion that
              still excites me to this day. Twelve years later, in 2012, I
              began my first full-time position as a Junior Developer, and
              even after more than two decades, I'm as fascinated as I was on
              day one.
            </p>
            <p>
              Today, my focus is on developing web applications, their
              architecture, and helping the people I lead grow. I love solving
              complex problems and creating innovative solutions that provide
              real value, both technically and humanly.
            </p>
          </div>
        </div>
      </div>
    </wd-container>
  `,
})
export class AboutMeComponent {}
