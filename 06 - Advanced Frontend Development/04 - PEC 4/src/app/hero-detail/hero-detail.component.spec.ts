import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } },
    });
    const locationStub = () => ({ back: () => ({}) });
    const heroServiceStub = () => ({
      getHero: (id) => ({
        subscribe: (f) => f({}),
      }),
      updateHero: (hero) => ({ subscribe: (f) => f({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Location, useFactory: locationStub },
        { provide: HeroService, useFactory: heroServiceStub },
      ],
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });
  it('Can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('getHero', () => {
    it('Makes expected calls', () => {
      const heroServiceStub: HeroService = TestBed.inject(HeroService);
      spyOn(heroServiceStub, 'getHero').and.callThrough();
      component.getHero();
      expect(heroServiceStub.getHero).toHaveBeenCalled();
    });
  });
  describe('goBack', () => {
    it('Makes expected calls', () => {
      const locationStub: Location = TestBed.inject(Location);
      spyOn(locationStub, 'back').and.callThrough();
      component.goBack();
      expect(locationStub.back).toHaveBeenCalled();
    });
  });
  describe('save', () => {
    it('Makes expected calls', () => {
      const heroServiceStub: HeroService = TestBed.inject(HeroService);
      spyOn(component, 'goBack').and.callThrough();
      spyOn(heroServiceStub, 'updateHero').and.callThrough();
      component.save();
      expect(component.goBack).toHaveBeenCalled();
      expect(heroServiceStub.updateHero).toHaveBeenCalled();
    });
  });
});
