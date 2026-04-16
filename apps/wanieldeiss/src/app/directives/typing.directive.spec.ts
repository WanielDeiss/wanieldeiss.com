import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TypingDirective } from './typing.directive';

describe('TypingDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } },
      ],
    });
    const directive = TestBed.runInInjectionContext(() => new TypingDirective());
    expect(directive).toBeTruthy();
  });
});
