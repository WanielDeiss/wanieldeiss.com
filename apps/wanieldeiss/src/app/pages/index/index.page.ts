import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { StackComponent } from '../../components/stack/stack.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    StackComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  selector: 'wd-index',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <wd-hero />

    <section id="about" aria-labelledby="heading-about" class="scroll-mt-24 py-section">
      <wd-about-me />
    </section>

    <section id="stack" aria-labelledby="heading-stack" class="scroll-mt-24 py-section">
      <wd-stack />
    </section>

    <section id="experience" aria-labelledby="heading-experience" class="scroll-mt-24 py-section">
      <wd-experience />
    </section>

    <section id="projects" aria-labelledby="heading-projects" class="scroll-mt-24 py-section">
      <wd-projects />
    </section>

    <section id="contact" aria-labelledby="heading-contact" class="scroll-mt-24 py-section">
      <wd-contact />
    </section>
  `,
})
export class IndexPage {}
