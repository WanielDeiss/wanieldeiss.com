import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CardComponent } from './card.component';

@Component({
  standalone: true,
  imports: [CardComponent],
  template: `<wd-card>Test content</wd-card>`,
})
class TestHost {}

describe('CardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();
  });

  it('renders projected content', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Test content');
  });

  it('applies base card classes on host', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('wd-card');
    expect(card.classList.contains('rounded-2xl')).toBe(true);
    expect(card.classList.contains('border')).toBe(true);
  });
});
