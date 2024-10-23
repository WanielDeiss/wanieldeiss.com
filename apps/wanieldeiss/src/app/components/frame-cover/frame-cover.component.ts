import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingDirective } from '../../directives/typing.directive';

@Component({
  selector: 'wd-frame-cover',
  standalone: true,
  imports: [CommonModule, TypingDirective],
  template: `
    <div>
      <span
        class="font-mono text-sky-600 dark:text-sky-400 md:text-base text-sm"
      >
        Hi, my name is
      </span>
      <h1
        class="font-extrabold text-sky-800 dark:text-sky-50 md:text-7xl text-4xl"
      >
        Daniel Weiß
      </h1>
      <p class="text-sky-400 dark:text-sky-200 md:text-5xl text-2xl">
        I'm a<span [wdTyping]="thisIsMe"></span>
        <span class="animate-ping">_</span>
        from Germany.
      </p>
    </div>
  `,
})
export class FrameCoverComponent {
  thisIsMe: string[] = [
    ' software engineer',
    'n open source contributor',
    ' terminal lover',
    ' maker',
    ' 3d printing enthusiast',
    ' dungeon master',
  ];
}
