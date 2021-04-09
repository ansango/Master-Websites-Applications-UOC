import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationNewEditComponent } from './education-new-edit.component';

describe('EducationNewEditComponent', () => {
  let component: EducationNewEditComponent;
  let fixture: ComponentFixture<EducationNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationNewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
