import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'wd-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    class:
      'block rounded-2xl border border-border bg-surface-elevated/40 p-6 transition-colors',
  },
})
export class CardComponent {}
