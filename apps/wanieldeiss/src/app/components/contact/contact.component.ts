import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import {
  SectionHeaderComponent,
} from '../section-header/section-header.component';
import { CardComponent } from '../../ui/card/card.component';
import { ContainerComponent } from '../../ui';
import { CONTACT_LINKS } from './contact.data';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { Mail, Linkedin, Github } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'wd-contact',
  imports: [
    ContainerComponent,
    SectionHeaderComponent,
    CardComponent,
    LucideAngularModule,
  ],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Mail, Linkedin, Github }),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected readonly links = CONTACT_LINKS;
}
