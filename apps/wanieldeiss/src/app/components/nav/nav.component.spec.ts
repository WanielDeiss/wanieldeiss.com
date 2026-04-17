import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the DW logo link', () => {
    const logo = fixture.debugElement.query(
      By.css('a[aria-label="Daniel Weiß — home"]'),
    );
    expect(logo).toBeTruthy();
    expect((logo.nativeElement as HTMLElement).textContent?.trim()).toBe('DW');
  });

  it('should render all section anchors with correct hrefs', () => {
    const anchors = fixture.debugElement.queryAll(
      By.css('nav[aria-label="Primary"] a'),
    );
    const hrefs = anchors.map((a) =>
      (a.nativeElement as HTMLAnchorElement).getAttribute('href'),
    );
    expect(hrefs).toEqual([
      '#about',
      '#stack',
      '#experience',
      '#projects',
      '#contact',
    ]);
  });

  it('should render the theme toggle', () => {
    const toggle = fixture.debugElement.query(By.css('wd-theme-toggle'));
    expect(toggle).toBeTruthy();
  });

  it('should toggle the mobile menu open state', () => {
    const trigger = fixture.debugElement.query(
      By.css('button[aria-controls="mobile-nav-panel"]'),
    ).nativeElement as HTMLButtonElement;
    expect(component['menuOpen']()).toBe(false);
    trigger.click();
    expect(component['menuOpen']()).toBe(true);
    trigger.click();
    expect(component['menuOpen']()).toBe(false);
  });
});
