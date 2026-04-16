import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SectionHeaderComponent } from './section-header.component';

@Component({
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <wd-section-header index="02" title="Experience">
      <p class="lede">Intro copy</p>
    </wd-section-header>
  `,
})
class HostComponent {}

describe('SectionHeaderComponent', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should render the index and title', () => {
    const eyebrow = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLElement;
    expect(eyebrow.textContent).toContain('02');
    expect(eyebrow.textContent).toContain('Experience');

    const heading = fixture.debugElement.query(By.css('h2'))
      .nativeElement as HTMLElement;
    expect(heading.textContent?.trim()).toBe('Experience');
  });

  it('should project intro copy', () => {
    const lede = fixture.debugElement.query(By.css('.lede'))
      .nativeElement as HTMLElement;
    expect(lede.textContent?.trim()).toBe('Intro copy');
  });
});
