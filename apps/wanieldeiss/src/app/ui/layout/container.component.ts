import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type ContainerSize = 'narrow' | 'prose' | 'page' | 'wide';

const SIZE_MAX_WIDTH: Record<ContainerSize, string> = {
  narrow: 'max-w-[var(--container-narrow)]',
  prose: 'max-w-[var(--container-prose)]',
  page: 'max-w-[var(--container-page)]',
  wide: 'max-w-[var(--container-wide)]',
};

/**
 * Centred content container with the project's standard horizontal padding.
 * Pick a `size` for the editorial measure: `narrow`, `prose`, `page`
 * (default), or `wide`.
 */
@Component({
  standalone: true,
  selector: 'wd-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="containerClass()">
      <ng-content />
    </div>
  `,
})
export class ContainerComponent {
  readonly size = input<ContainerSize>('page');

  protected readonly containerClass = computed(
    () =>
      `mx-auto w-full px-6 sm:px-8 lg:px-12 ${SIZE_MAX_WIDTH[this.size()]}`,
  );
}
