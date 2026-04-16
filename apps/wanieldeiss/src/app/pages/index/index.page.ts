import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ContainerComponent } from '../../ui';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
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

    <section id="experience" class="scroll-mt-24 py-section">
      <wd-container size="page">
        <wd-section-header index="02" title="Experience">
          <p>Placeholder — content arrives with the experience task.</p>
        </wd-section-header>
      </wd-container>
    </section>

    <section id="projects" class="scroll-mt-24 py-section">
      <wd-container size="page">
        <wd-section-header index="03" title="Projects">
          <p>Placeholder — content arrives with the projects task.</p>
        </wd-section-header>
      </wd-container>
    </section>

    <section id="contact" class="scroll-mt-24 py-section">
      <wd-container size="page">
        <wd-section-header index="04" title="Contact">
          <p>Placeholder — content arrives with the contact task.</p>
        </wd-section-header>
      </wd-container>
    </section>
  `,
})
export class IndexPage {}
