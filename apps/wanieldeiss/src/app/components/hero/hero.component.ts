import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';

import { ContainerComponent, ReducedMotionService } from '../../ui';

const ROLES = [
  'Software Developer',
  'Technical Lead',
  'Dungeon Master',
  'Problem Solver',
  'Lifelong Learner',
] as const;

const ROTATION_INTERVAL_MS = 3000;
const TRANSITION_DURATION_MS = 520;

@Component({
  standalone: true,
  selector: 'wd-hero',
  imports: [ContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private readonly reducedMotionService = inject(ReducedMotionService);
  private leavingClearTimerId: ReturnType<typeof setTimeout> | null = null;

  protected readonly roles = ROLES;

  protected readonly currentIndex = signal(0);
  protected readonly leavingIndex = signal<number | null>(null);
  protected readonly paused = signal(false);

  protected readonly reducedMotion = this.reducedMotionService.reducedMotion;

  protected readonly currentRole = computed(
    () => this.roles[this.currentIndex()],
  );
  protected readonly leavingRole = computed(() => {
    const index = this.leavingIndex();
    return index === null ? null : this.roles[index];
  });

  constructor() {
    const destroyRef = inject(DestroyRef);
    const intervalId = setInterval(
      () => this.tick(),
      ROTATION_INTERVAL_MS,
    );
    destroyRef.onDestroy(() => {
      clearInterval(intervalId);
      if (this.leavingClearTimerId !== null) {
        clearTimeout(this.leavingClearTimerId);
      }
    });
  }

  protected onPointerEnter(): void {
    this.paused.set(true);
  }

  protected onPointerLeave(): void {
    this.paused.set(false);
  }

  private tick(): void {
    if (this.paused() || this.reducedMotion()) {
      return;
    }
    this.advance();
  }

  private advance(): void {
    this.leavingIndex.set(this.currentIndex());
    this.currentIndex.update((index) => (index + 1) % this.roles.length);

    if (this.leavingClearTimerId !== null) {
      clearTimeout(this.leavingClearTimerId);
    }
    this.leavingClearTimerId = setTimeout(() => {
      this.leavingIndex.set(null);
      this.leavingClearTimerId = null;
    }, TRANSITION_DURATION_MS);
  }
}
