import { DestroyRef, Injectable, inject, signal } from '@angular/core';

/**
 * Signal-backed wrapper around the `prefers-reduced-motion` media query.
 *
 * Components consume `reducedMotion()` to opt complex animations out at
 * runtime. The CSS in `styles.css` already neutralises ordinary transitions
 * globally — this signal is for cases where the markup itself differs (for
 * instance, skipping a parallax layer or scroll-driven sequence).
 */
@Injectable({ providedIn: 'root' })
export class ReducedMotionService {
  readonly reducedMotion = signal(this.matchesReducedMotion());

  constructor() {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event: MediaQueryListEvent): void =>
      this.reducedMotion.set(event.matches);
    mql.addEventListener('change', handler);
    inject(DestroyRef).onDestroy(() =>
      mql.removeEventListener('change', handler),
    );
  }

  private matchesReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
