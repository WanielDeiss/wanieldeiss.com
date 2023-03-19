import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[wdTyping]',
})
export class TypingDirective implements OnInit {
  typeSpeed = 100;
  showWordInSec = 3000;

  private _wdTyping: string[] = [];
  @Input() set wdTyping(value: string[]) {
    this._wdTyping = value;
    this.currentWord$.next([value[0], 0]);
  }

  currentWord$ = new BehaviorSubject<[string, number]>(['', 0]);

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.currentWord$.subscribe(([word, index]) => {
      const nextCount = this._wdTyping.length === index + 1 ? 0 : index + 1;
      this.writeWord(word, nextCount);
    });
  }

  deleteWord(word: string, nextCount: number) {
    const chars = word.split('');
    let typedWord = word;

    chars.forEach((char, index) => {
      setTimeout(() => {
        typedWord = typedWord.slice(0, -1);
        this.elRef.nativeElement.innerHTML = typedWord;
        if (index === chars.length - 1) {
          this.currentWord$.next([this._wdTyping[nextCount], nextCount]);
        }
      }, this.typeSpeed * index);
    });
  }

  writeWord(word: string, nextCount: number) {
    const chars = word.split('');
    let typedWord = '';

    chars.forEach((char, index) => {
      setTimeout(() => {
        typedWord += char;
        this.elRef.nativeElement.innerHTML = typedWord;
        if (index === chars.length - 1) {
          setTimeout(() => {
            this.deleteWord(word, nextCount);
          }, this.showWordInSec);
        }
      }, this.typeSpeed * index);
    });
  }
}
