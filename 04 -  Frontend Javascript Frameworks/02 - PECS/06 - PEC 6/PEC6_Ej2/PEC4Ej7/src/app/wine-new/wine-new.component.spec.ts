import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineNewComponent } from './wine-new.component';

describe('WineNewComponent', () => {
  let component: WineNewComponent;
  let fixture: ComponentFixture<WineNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
