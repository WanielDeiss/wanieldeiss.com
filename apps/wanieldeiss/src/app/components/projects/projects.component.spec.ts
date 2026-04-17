import { TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { PROJECTS } from './projects.data';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one card per project', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('wd-card');
    expect(cards.length).toBe(PROJECTS.length);
  });

  it('renders titles and descriptions', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent ?? '';
    for (const project of PROJECTS) {
      expect(text).toContain(project.title);
      expect(text).toContain(project.description);
    }
  });

  it('renders external link only for projects with a URL', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll(
      'a[target="_blank"]',
    );
    const projectsWithUrl = PROJECTS.filter((p) => p.url);
    expect(links.length).toBe(projectsWithUrl.length);
  });
});
