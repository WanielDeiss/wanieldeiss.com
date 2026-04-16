import { TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { EXPERIENCE } from './experience.data';

describe('ExperienceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one timeline entry per experience item', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    const entries = fixture.nativeElement.querySelectorAll('li.entry');
    expect(entries.length).toBe(EXPERIENCE.length);
  });

  it('renders role and company for each entry', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent ?? '';
    for (const entry of EXPERIENCE) {
      expect(text).toContain(entry.role);
      expect(text).toContain(entry.company);
    }
  });
});
