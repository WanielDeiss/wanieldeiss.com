import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the name "Daniel Weiß" as the H1', () => {
    const heading = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(heading.textContent).toContain('Daniel Weiß');
  });

  it('should start with "Software Developer" as the initial role', () => {
    const role = fixture.debugElement.query(By.css('.role')).nativeElement;
    expect(role.textContent.trim()).toBe('Software Developer');
  });

  it('should offer all five roles in order', () => {
    expect([...component['roles']]).toEqual([
      'Software Developer',
      'Technical Lead',
      'Dungeon Master',
      'Problem Solver',
      'Lifelong Learner',
    ]);
  });

  it('should render both CTAs with correct targets', () => {
    const anchors = fixture.debugElement.queryAll(By.css('a'));
    const primary = anchors.find((a) =>
      (a.nativeElement as HTMLAnchorElement).textContent?.includes(
        "Let's talk",
      ),
    );
    const secondary = anchors.find((a) =>
      (a.nativeElement as HTMLAnchorElement).textContent?.includes(
        'Download CV',
      ),
    );

    expect(primary).toBeTruthy();
    expect(
      (primary!.nativeElement as HTMLAnchorElement).getAttribute('href'),
    ).toBe('#contact');

    expect(secondary).toBeTruthy();
    expect(
      (secondary!.nativeElement as HTMLAnchorElement).getAttribute('href'),
    ).toBe('/daniel-weiss-cv.pdf');
    expect(
      (secondary!.nativeElement as HTMLAnchorElement).hasAttribute('download'),
    ).toBe(true);
  });
});
