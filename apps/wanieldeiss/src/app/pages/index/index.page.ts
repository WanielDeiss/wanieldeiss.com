import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullSizeDirective } from '../../directives/full-size.directive';
import { FrameCoverComponent } from '../../components/frame-cover/frame-cover.component';

@Component({
  standalone: true,
  imports: [CommonModule, FullSizeDirective, FrameCoverComponent],
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
    </main>
  `,
})
export class IndexPage {}
