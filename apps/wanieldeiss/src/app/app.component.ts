import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NavComponent,
  ScrollProgressComponent,
  SkipLinkComponent,
  SocialIconBarComponent,
  FooterComponent,
  KonamiComponent,
} from './components';

import { CursorDotComponent } from './ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavComponent,
    ScrollProgressComponent,
    SkipLinkComponent,
    SocialIconBarComponent,
    FooterComponent,
    CursorDotComponent,
    KonamiComponent,
  ],
  selector: 'wd-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {}
