import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameCoverComponent } from './frame-cover.component';
import { TypingDirective } from '../../directives/typing.directive';
import { By } from '@angular/platform-browser';

describe('FrameCoverComponent', () => {
  let component: FrameCoverComponent;
  let fixture: ComponentFixture<FrameCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameCoverComponent, TypingDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(FrameCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial values in thisIsMe array', () => {
    const expectedValues = [
      ' software engineer',
      'n open source contributor',
      ' terminal lover',
      ' maker',
      ' 3d printing enthusiast',
      ' dungeon master',
    ];
    expect(component.thisIsMe).toEqual(expectedValues);
  });

  it('should render name "Daniel Weiß" correctly', () => {
    const nameElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(nameElement.textContent).toContain('Daniel Weiß');
  });

  // Anpassung des Tests: trim() entfernt unnötige Leerzeichen
  it('should render "Hi, my name is" correctly', () => {
    const introElement = fixture.debugElement.query(
      By.css('span.font-mono'),
    ).nativeElement;
    expect(introElement.textContent.trim()).toBe('Hi, my name is');
  });

  it('should render "from Germany." correctly', () => {
    const fromGermanyElement = fixture.debugElement.query(
      By.css('p'),
    ).nativeElement;
    expect(fromGermanyElement.textContent).toContain('from Germany.');
  });

  it('should display the cursor underscore correctly', () => {
    const cursorElement = fixture.debugElement.query(
      By.css('span.animate-ping'),
    ).nativeElement;
    expect(cursorElement.textContent).toBe('_');
  });

  it('should use the TypingDirective on the correct element', () => {
    const typingElement = fixture.debugElement.query(
      By.directive(TypingDirective),
    );
    expect(typingElement).toBeTruthy();
  });
});
