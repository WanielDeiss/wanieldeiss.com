import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NavComponent,
  ScrollProgressComponent,
  SkipLinkComponent,
  SocialIconBarComponent,
  FooterComponent,
} from './components';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavComponent,
    ScrollProgressComponent,
    SkipLinkComponent,
    SocialIconBarComponent,
    FooterComponent,
  ],
  selector: 'wd-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {}
