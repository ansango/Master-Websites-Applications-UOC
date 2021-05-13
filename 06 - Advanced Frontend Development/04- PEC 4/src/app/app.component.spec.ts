import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`Title has default value`, () => {
    expect(component.title).toEqual(`Tour of Heroes`);
  });
});
