import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SectionHeaderComponent,
} from '../section-header/section-header.component';
import { CardComponent } from '../../ui/card/card.component';
import { ContainerComponent } from '../../ui';
import { STACK } from './stack.data';

@Component({
  standalone: true,
  selector: 'wd-stack',
  imports: [ContainerComponent, SectionHeaderComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <wd-container size="page">
      <wd-section-header index="02" title="Stack" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        @for (group of groups; track group.title) {
          <wd-card>
            <h3
              class="font-display text-lg font-light tracking-[var(--tracking-display)] text-fg-strong"
            >
              {{ group.title }}
            </h3>
            <div class="mt-4 flex flex-wrap gap-2">
              @for (skill of group.skills; track skill) {
                <span
                  class="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs text-fg-muted transition-colors hover:border-accent hover:text-fg-strong"
                >
                  {{ skill }}
                </span>
              }
            </div>
          </wd-card>
        }
      </div>
    </wd-container>
  `,
})
export class StackComponent {
  protected readonly groups = STACK;
}
