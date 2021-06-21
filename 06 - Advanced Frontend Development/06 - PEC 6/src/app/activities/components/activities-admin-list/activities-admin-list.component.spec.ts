import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAdminListComponent } from './activities-admin-list.component';

describe('ActivitiesAdminListComponent', () => {
  let component: ActivitiesAdminListComponent;
  let fixture: ComponentFixture<ActivitiesAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
