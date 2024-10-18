import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'wd-page-wrapper',
  template: `
    <section class="h-full pt-20 pb-12 px-8 flex justify-center items-center">
      <ng-content></ng-content>
    </section>
  `,
})
export class PageWrapperComponent {}
