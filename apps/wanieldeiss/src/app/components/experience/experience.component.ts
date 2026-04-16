import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChildren,
} from '@angular/core';

import {
  SectionHeaderComponent,
} from '../section-header/section-header.component';
import { ContainerComponent } from '../../ui';
import { EXPERIENCE } from './experience.data';

const ENTRY_THRESHOLD = 0.15;

/**
 * Vertical experience timeline.
 *
 * Entries are sourced from `experience.data.ts` so the list can be
 * maintained without touching the component. Each entry sits to the right
 * of a 1px rule with a small accent dot marking its position; as the user
 * scrolls the list into view a single IntersectionObserver fades each
 * entry in exactly once.
 */
@Component({
  standalone: true,
  selector: 'wd-experience',
  imports: [ContainerComponent, SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly entryRefs =
    viewChildren<ElementRef<HTMLElement>>('entry');

  protected readonly entries = EXPERIENCE;
  protected readonly visibleEntries = signal<ReadonlySet<number>>(
    new Set(),
  );

  constructor() {
    afterNextRender(() => this.observeEntries());
  }

  private observeEntries(): void {
    const refs = this.entryRefs();
    if (refs.length === 0) {
      return;
    }
    if (globalThis.IntersectionObserver === undefined) {
      this.visibleEntries.set(new Set(refs.map((_, index) => index)));
      return;
    }
    const observer = new globalThis.IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          const index = refs.findIndex(
            (ref) => ref.nativeElement === entry.target,
          );
          if (index === -1) {
            continue;
          }
          this.visibleEntries.update((set) => new Set(set).add(index));
          obs.unobserve(entry.target);
        }
      },
      { threshold: ENTRY_THRESHOLD },
    );
    refs.forEach((ref) => observer.observe(ref.nativeElement));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
