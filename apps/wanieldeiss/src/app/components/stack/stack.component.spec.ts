import { TestBed } from '@angular/core/testing';

import { StackComponent } from './stack.component';
import { STACK } from './stack.data';

describe('StackComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(StackComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one card per stack group', () => {
    const fixture = TestBed.createComponent(StackComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('wd-card');
    expect(cards.length).toBe(STACK.length);
  });

  it('renders group titles', () => {
    const fixture = TestBed.createComponent(StackComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent ?? '';
    for (const group of STACK) {
      expect(text).toContain(group.title);
    }
  });
});
