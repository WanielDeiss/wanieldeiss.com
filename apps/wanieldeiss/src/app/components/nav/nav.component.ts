import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import {
  ContainerComponent,
  ReducedMotionService,
  ThemeToggleComponent,
} from '../../ui';

interface NavLink {
  readonly id: string;
  readonly label: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SCROLL_SENTINEL_THRESHOLD = 0;
const SECTION_ACTIVE_RATIO = 0.35;

/**
 * Top navigation shell.
 *
 * - Fixed to the top of the viewport, goes translucent with a backdrop blur
 *   once the page has been scrolled past the sentinel.
 * - Four section anchors scroll-link into the landing page sections, using
 *   smooth behaviour unless the user opts out via prefers-reduced-motion.
 * - Mobile collapses the desktop nav into a hamburger that opens an inline
 *   full-height slide-in panel with DIY focus-trap and body scroll lock.
 * - Active section is tracked via a second IntersectionObserver and reflected
 *   as `aria-current="location"` on the matching link.
 */
@Component({
  standalone: true,
  selector: 'wd-nav',
  imports: [ContainerComponent, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private readonly reducedMotionService = inject(ReducedMotionService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly panelRef = viewChild<ElementRef<HTMLElement>>('panel');

  protected readonly links = NAV_LINKS;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal<string | null>(null);

  protected readonly reducedMotion = this.reducedMotionService.reducedMotion;

  protected readonly headerClass = computed(() => {
    const base =
      'fixed inset-x-0 top-0 z-50 transition-colors duration-200';
    const scrolled = this.scrolled()
      ? 'bg-surface/80 supports-[backdrop-filter]:bg-surface/60 backdrop-blur border-b border-border'
      : 'bg-transparent border-b border-transparent';
    return `${base} ${scrolled}`;
  });

  constructor() {
    afterNextRender(() => {
      this.observeScrollSentinel();
      this.observeSections();
    });

    effect(() => {
      if (typeof document === 'undefined') {
        return;
      }
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });

    this.destroyRef.onDestroy(() => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onNavClick(id: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const behavior: ScrollBehavior = this.reducedMotion() ? 'auto' : 'smooth';
    target.scrollIntoView({ behavior, block: 'start' });
    if (globalThis.history !== undefined) {
      globalThis.history.replaceState(null, '', `#${id}`);
    }
  }

  protected onLogoClick(event: Event): void {
    event.preventDefault();
    this.closeMenu();
    if (globalThis.window === undefined) {
      return;
    }
    const behavior: ScrollBehavior = this.reducedMotion() ? 'auto' : 'smooth';
    globalThis.scrollTo({ top: 0, behavior });
    if (globalThis.history !== undefined) {
      globalThis.history.replaceState(null, '', globalThis.location.pathname);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (!this.menuOpen() || event.key !== 'Tab') {
      return;
    }
    const panel = this.panelRef()?.nativeElement;
    if (!panel) {
      return;
    }
    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      ),
    ).filter((node) => !node.hasAttribute('hidden'));
    if (focusables.length === 0) {
      return;
    }
    const first = focusables[0];
    const last = focusables.at(-1) ?? first;
    const active = document.activeElement as HTMLElement | null;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private observeScrollSentinel(): void {
    if (globalThis.IntersectionObserver === undefined) {
      return;
    }
    const sentinel = this.host.nativeElement.querySelector<HTMLElement>(
      '[data-scroll-sentinel]',
    );
    if (!sentinel) {
      return;
    }
    const observer = new globalThis.IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        this.scrolled.set(!entry.isIntersecting);
      },
      { threshold: SCROLL_SENTINEL_THRESHOLD },
    );
    observer.observe(sentinel);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private observeSections(): void {
    if (globalThis.IntersectionObserver === undefined) {
      return;
    }
    const sections = this.links
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    if (sections.length === 0) {
      return;
    }
    const observer = new globalThis.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      { threshold: [SECTION_ACTIVE_RATIO] },
    );
    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
