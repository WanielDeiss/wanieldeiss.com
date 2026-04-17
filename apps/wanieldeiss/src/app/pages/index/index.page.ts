import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ContainerComponent } from '../../ui';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { StackComponent } from '../../components/stack/stack.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    StackComponent,
    ExperienceComponent,
    ProjectsComponent,
    SectionHeaderComponent,
    ContainerComponent,
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

    <section id="projects" class="scroll-mt-24 py-section">
      <wd-projects />
    </section>

    <section id="contact" class="scroll-mt-24 py-section">
      <wd-container size="page">
        <wd-section-header index="05" title="Contact">
          <p>Placeholder — content arrives with the contact task.</p>
        </wd-section-header>
      </wd-container>
    </section>
  `,
})
export class IndexPage {}
