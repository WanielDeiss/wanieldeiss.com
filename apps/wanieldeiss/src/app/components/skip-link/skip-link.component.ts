import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Visually-hidden "Skip to content" anchor that reveals itself on focus.
 *
 * The shell in {@link AppComponent} renders this as its very first child so
 * keyboard users can bypass the nav chrome and jump straight to the
 * `#main-content` landmark that wraps `<router-outlet>`.
 */
@Component({
  standalone: true,
  selector: 'wd-skip-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      href="#main-content"
      class="focus-ring sr-only fixed left-4 top-4 z-[60] inline-flex items-center rounded-full bg-surface-elevated px-4 py-2 text-sm font-medium text-fg-strong shadow-md focus:not-sr-only focus-visible:not-sr-only"
    >
      Skip to content
    </a>
  `,
})
export class SkipLinkComponent {}
