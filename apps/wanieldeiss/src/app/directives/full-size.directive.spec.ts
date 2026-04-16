import { TestBed } from '@angular/core/testing';

import { FullSizeDirective } from './full-size.directive';

describe('FullSizeDirective', () => {
  it('should create an instance', () => {
    const directive = TestBed.runInInjectionContext(() => new FullSizeDirective());
    expect(directive).toBeTruthy();
  });
});
