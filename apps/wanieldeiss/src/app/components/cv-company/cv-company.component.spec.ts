import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCompanyComponent } from './cv-company.component';

describe('CvCompanyComponent', () => {
  let component: CvCompanyComponent;
  let fixture: ComponentFixture<CvCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
