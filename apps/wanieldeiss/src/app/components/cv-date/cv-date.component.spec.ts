import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDateComponent } from './cv-date.component';

describe('CvDateComponent', () => {
  let component: CvDateComponent;
  let fixture: ComponentFixture<CvDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
