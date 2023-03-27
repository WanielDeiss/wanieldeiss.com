import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconBarComponent } from './social-icon-bar.component';

describe('SocialIconBarComponent', () => {
  let component: SocialIconBarComponent;
  let fixture: ComponentFixture<SocialIconBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialIconBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialIconBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
