import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { ReducedMotionService } from '../theme/reduced-motion.service';

@Component({
  standalone: true,
  selector: 'wd-cursor-dot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      #dot
      class="cursor-dot"
      [class.cursor-dot--hover]="hovering()"
      aria-hidden="true"
    ></div>
  `,
  styles: `
    :host {
      display: contents;
    }

    .cursor-dot {
      position: fixed;
      top: -4px;
      left: -4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-fg-muted);
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transition:
        width 200ms ease,
        height 200ms ease,
        top 200ms ease,
        left 200ms ease,
        background-color 200ms ease,
        opacity 200ms ease;
      will-change: transform;
    }

    .cursor-dot--hover {
      width: 24px;
      height: 24px;
      top: -12px;
      left: -12px;
      background-color: var(--color-accent);
      opacity: 0.35 !important;
    }

    @media (pointer: coarse) {
      .cursor-dot {
        display: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .cursor-dot {
        display: none;
      }
    }
  `,
})
export class CursorDotComponent {
  private readonly reducedMotion = inject(ReducedMotionService).reducedMotion;
  private readonly destroyRef = inject(DestroyRef);

  protected readonly hovering = signal(false);
  private readonly dotRef = viewChild<ElementRef<HTMLElement>>('dot');

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private visible = false;
  private rafId: number | null = null;

  constructor() {
    afterNextRender(() => this.init());
    this.destroyRef.onDestroy(() => {
      if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    });
  }

  private init(): void {
    if (this.reducedMotion()) return;
    if (
      typeof globalThis.matchMedia !== 'function' ||
      !globalThis.matchMedia('(pointer: fine)').matches
    ) {
      return;
    }

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseover', this.onMouseOver);
    document.addEventListener('mouseout', this.onMouseOut);
    document.addEventListener('mouseleave', this.onDocumentLeave);

    this.destroyRef.onDestroy(() => {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseover', this.onMouseOver);
      document.removeEventListener('mouseout', this.onMouseOut);
      document.removeEventListener('mouseleave', this.onDocumentLeave);
    });

    this.loop();
  }

  private readonly onMouseMove = (e: MouseEvent): void => {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    if (!this.visible) {
      this.visible = true;
      this.currentX = e.clientX;
      this.currentY = e.clientY;
    }
  };

  private readonly onMouseOver = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button, [role="button"]')) {
      this.hovering.set(true);
    }
  };

  private readonly onMouseOut = (e: MouseEvent): void => {
    const related = e.relatedTarget as HTMLElement | null;
    if (!related || !related.closest('a, button, [role="button"]')) {
      this.hovering.set(false);
    }
  };

  private readonly onDocumentLeave = (): void => {
    this.visible = false;
  };

  private readonly loop = (): void => {
    const lerp = 0.15;
    this.currentX += (this.targetX - this.currentX) * lerp;
    this.currentY += (this.targetY - this.currentY) * lerp;

    const dot = this.dotRef()?.nativeElement;
    if (dot) {
      dot.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;
      dot.style.opacity = this.visible ? '1' : '0';
    }

    this.rafId = requestAnimationFrame(this.loop);
  };
}
