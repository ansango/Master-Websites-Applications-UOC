import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService;
  let getHeroesSpy;

  beforeEach(
    waitForAsync(() => {
      heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
      getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
      TestBed.configureTestingModule({
        declarations: [DashboardComponent, HeroSearchComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: HeroService, useValue: heroService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual(
      'Top Heroes'
    );
  });

  it(
    'Should call heroService',
    waitForAsync(() => {
      expect(getHeroesSpy.calls.any()).toBe(true);
    })
  );

  it(
    'Should display 4 links',
    waitForAsync(() => {
      expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
    })
  );
});