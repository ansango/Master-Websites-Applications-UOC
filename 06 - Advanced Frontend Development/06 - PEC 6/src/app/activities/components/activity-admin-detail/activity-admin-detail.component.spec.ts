import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAdminDetailComponent } from './activity-admin-detail.component';

describe('ActivityAdminDetailComponent', () => {
  let component: ActivityAdminDetailComponent;
  let fixture: ComponentFixture<ActivityAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityAdminDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
