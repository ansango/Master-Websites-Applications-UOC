import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTouristComponent } from './profile-tourist.component';

describe('profileTouristComponent', () => {
  let component: ProfileTouristComponent;
  let fixture: ComponentFixture<ProfileTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileTouristComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
