import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullSizeDirective } from '../../directives/full-size.directive';
import { FrameCoverComponent } from '../../components/frame-cover/frame-cover.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FullSizeDirective,
    FrameCoverComponent,
    AboutMeComponent,
  ],
  selector: 'wd-index',
  template: `
    <main>
      <div
        class="flex justify-center items-center"
        wdFullSize="even"
        [isFullScreen]="true"
      >
        <wd-frame-cover />
      </div>
      <div class="flex justify-center items-center" wdFullSize="odd">
        <wd-about-me />
      </div>
    </main>
  `,
})
export class IndexPage {}
