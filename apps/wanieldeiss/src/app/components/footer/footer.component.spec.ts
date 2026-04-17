import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the copyright year', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent ?? '';
    expect(text).toContain(String(new Date().getFullYear()));
  });

  it('renders the source code link', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector(
      'a[href*="github.com"]',
    );
    expect(link).toBeTruthy();
    expect(link.textContent).toContain('Source Code');
  });
});
