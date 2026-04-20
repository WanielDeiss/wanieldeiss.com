import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { StackComponent } from '../../components/stack/stack.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    StackComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  selector: 'wd-index',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <wd-hero />

    <section id="about" class="scroll-mt-24 py-section">
      <wd-about-me />
    </section>

    <section id="stack" class="scroll-mt-24 py-section">
      <wd-stack />
    </section>

    <section id="experience" class="scroll-mt-24 py-section">
      <wd-experience />
    </section>

    <section id="contact" class="scroll-mt-24 py-section">
      <wd-contact />
    </section>
  `,
})
export class IndexPage {}
