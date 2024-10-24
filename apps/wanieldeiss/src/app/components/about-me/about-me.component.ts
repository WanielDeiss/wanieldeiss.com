import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingDirective } from '../../directives/typing.directive';

@Component({
  selector: 'wd-about-me',
  standalone: true,
  imports: [CommonModule, TypingDirective],
  template: `
    <div class="flex-row md:flex gap-8">
      <div
        class="font-extrabold text-sky-800 dark:text-sky-50 md:text-7xl text-4xl"
      >
        About me
      </div>
      <div
        class="font-mono text-sky-600 dark:text-sky-400 md:text-base text-sm max-w-96"
      >
        <p>
          I wrote my first function in 2000 using QBasic – mainly as an
          unconventional way to solve my math homework. What started as an
          experiment quickly turned into a passion that still excites me to this
          day. Twelve years later, in 2012, I began my first full-time position
          as a Junior Developer, and even after more than two decades, I’m as
          fascinated as I was on day one.
        </p>
        <p>
          Today, my focus is on developing web applications, their architecture,
          and helping the people I lead grow. I love solving complex problems
          and creating innovative solutions that provide real value, both
          technically and humanly.
        </p>
      </div>
    </div>
  `,
})
export class AboutMeComponent {}
