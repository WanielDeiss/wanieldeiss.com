import { Component } from '@angular/core';

import { FullSizeDirective } from '../../directives/full-size.directive';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  standalone: true,
  imports: [FullSizeDirective, HeroComponent, AboutMeComponent],
  selector: 'wd-index',
  template: `
    <main>
      <wd-hero />
      <div class="flex justify-center items-center" wdFullSize="odd">
        <wd-about-me />
      </div>
    </main>
  `,
})
export class IndexPage {}
