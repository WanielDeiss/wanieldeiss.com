import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

const KONAMI_SEQUENCE: readonly string[] = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

const DUNGEON_DURATION_MS = 10_000;

@Component({
  standalone: true,
  selector: 'wd-konami',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (flash()) {
      <div class="konami-flash" aria-hidden="true"></div>
    }
  `,
  styles: `
    @keyframes konami-flash {
      0% {
        background-color: rgba(212, 168, 67, 0.3);
      }
      100% {
        background-color: transparent;
      }
    }

    .konami-flash {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9998;
      animation: konami-flash 600ms ease-out both;
    }
  `,
})
export class KonamiComponent {
  protected readonly flash = signal(false);

  private readonly destroyRef = inject(DestroyRef);
  private buffer: string[] = [];
  private active = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private flashTimeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    afterNextRender(() => {
      document.addEventListener('keydown', this.onKeyDown);
    });
    this.destroyRef.onDestroy(() => {
      document.removeEventListener('keydown', this.onKeyDown);
      if (this.timeoutId) clearTimeout(this.timeoutId);
      if (this.flashTimeoutId) clearTimeout(this.flashTimeoutId);
      this.deactivate();
    });
  }

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    this.buffer.push(event.code);
    if (this.buffer.length > KONAMI_SEQUENCE.length) {
      this.buffer.shift();
    }
    if (
      this.buffer.length === KONAMI_SEQUENCE.length &&
      this.buffer.every((key, i) => key === KONAMI_SEQUENCE[i])
    ) {
      this.activate();
      this.buffer = [];
    }
  };

  private activate(): void {
    document.documentElement.classList.add('dungeon-master');
    this.active = true;

    this.flash.set(true);
    if (this.flashTimeoutId) clearTimeout(this.flashTimeoutId);
    this.flashTimeoutId = setTimeout(() => this.flash.set(false), 700);

    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.deactivate(), DUNGEON_DURATION_MS);
  }

  private deactivate(): void {
    if (!this.active) return;
    document.documentElement.classList.remove('dungeon-master');
    this.active = false;
    this.timeoutId = null;
  }
}
