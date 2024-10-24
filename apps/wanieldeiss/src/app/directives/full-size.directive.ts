import { Directive, effect, HostBinding, input } from '@angular/core';

type FullSizeBgType = 'even' | 'odd';

const fullSizeBg: { [key in FullSizeBgType]: string } = {
  even: 'bg-sky-50 dark:bg-sky-900',
  odd: 'bg-sky-100 dark:bg-sky-800',
};

@Directive({
  selector: '[wdFullSize]',
  standalone: true,
})
export class FullSizeDirective {
  wdFullSize = input<FullSizeBgType>('even');
  isFullScreen = input<boolean>(false);

  baseClasses = 'p-14';
  fullScreenClasses = 'min-h-screen w-screen p-8';
  constructor() {
    effect(() => {
      this.elementClass = `${this.baseClasses} ${this.isFullScreen() ? this.fullScreenClasses : ''} ${fullSizeBg[this.wdFullSize()]}`;
    });
  }

  @HostBinding('class')
  elementClass = this.baseClasses;
}
