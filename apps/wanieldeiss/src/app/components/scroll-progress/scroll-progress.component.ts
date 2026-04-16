import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

import { ReducedMotionService } from '../../ui';

/**
 * 1px-tall accent bar pinned to the top of the viewport that tracks how far
 * the page has been scrolled. The indicator renders as a single inner track
 * transformed with `scaleX(progress)` so the GPU handles the compositing and
 * no layout ever happens while scrolling.
 *
 * - Scroll updates are rAF-throttled so continuous wheel events don't saturate
 *   the main thread.
 * - The initial value is seeded inside `afterNextRender` so SSR / pre-hydration
 *   never touches `window`.
 * - Reduced-motion drops the inner CSS transition — the bar still tracks the
 *   scroll position, just without the 120ms easing.
 */
@Component({
  standalone: true,
  selector: 'wd-scroll-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-x-0 top-0 z-[55] h-px"
    >
      <div
        class="h-full origin-left bg-accent"
        [class.transition-transform]="!reducedMotion()"
        [class.duration-150]="!reducedMotion()"
        [style.transform]="'scaleX(' + progress() + ')'"
      ></div>
    </div>
  `,
})
export class ScrollProgressComponent {
  private readonly reducedMotionService = inject(ReducedMotionService);
  protected readonly reducedMotion = this.reducedMotionService.reducedMotion;
  protected readonly progress = signal(0);

  private rafHandle: number | null = null;

  constructor() {
    afterNextRender(() => this.sync());
    inject(DestroyRef).onDestroy(() => {
      if (this.rafHandle !== null) {
        globalThis.cancelAnimationFrame(this.rafHandle);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.rafHandle !== null) {
      return;
    }
    this.rafHandle = globalThis.requestAnimationFrame(() => {
      this.rafHandle = null;
      this.sync();
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.sync();
  }

  private sync(): void {
    if (typeof globalThis.window === 'undefined') {
      return;
    }
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - globalThis.innerHeight;
    if (scrollable <= 0) {
      this.progress.set(0);
      return;
    }
    const ratio = globalThis.scrollY / scrollable;
    this.progress.set(Math.max(0, Math.min(1, ratio)));
  }
}
