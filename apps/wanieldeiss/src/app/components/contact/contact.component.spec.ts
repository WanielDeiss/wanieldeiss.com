import { TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { CONTACT_LINKS } from './contact.data';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one link-card per contact link', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('wd-card');
    expect(cards.length).toBe(CONTACT_LINKS.length);
  });

  it('renders the headline', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent ?? '';
    expect(text).toContain("Let's build something");
  });
});
