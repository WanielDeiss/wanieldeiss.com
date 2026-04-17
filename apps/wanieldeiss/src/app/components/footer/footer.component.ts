import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  LucideAngularModule,
  LUCIDE_ICONS,
  LucideIconProvider,
  Github,
} from 'lucide-angular';

import { ContainerComponent } from '../../ui';

@Component({
  standalone: true,
  selector: 'wd-footer',
  imports: [ContainerComponent, LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Github }),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-border py-10">
      <wd-container size="page">
        <div
          class="flex flex-col items-center gap-4 text-center text-xs text-fg-muted sm:flex-row sm:justify-between sm:text-left"
        >
          <p>&copy; {{ year }} Daniel Weiß</p>
          <p>Built with Angular &amp; Tailwind</p>
          <a
            href="https://github.com/WanielDeiss/wanieldeiss.com"
            target="_blank"
            rel="noopener noreferrer"
            class="focus-ring inline-flex items-center gap-1.5 transition-colors hover:text-fg-strong"
          >
            <lucide-icon
              name="github"
              [size]="14"
              [strokeWidth]="1.5"
            />
            Source Code
          </a>
        </div>
      </wd-container>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
