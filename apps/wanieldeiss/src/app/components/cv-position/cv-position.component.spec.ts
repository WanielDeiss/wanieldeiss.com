import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPositionComponent } from './cv-position.component';

describe('CvPositionComponent', () => {
  let component: CvPositionComponent;
  let fixture: ComponentFixture<CvPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvPositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
