import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { By } from '@angular/platform-browser';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Hero } from '../hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    const heroStub = () => ({});
    const heroServiceStub = () => ({
      getHeroes: () => ({ subscribe: (f) => f({}) }),
      addHero: (hero) => ({ subscribe: (f) => f({}) }),
      deleteHero: (hero) => ({}),
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeroesComponent],
      providers: [
        { provide: Hero, useFactory: heroStub },
        { provide: HeroService, useFactory: heroServiceStub },
      ],
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Cases', () => {
    beforeEach(() => {
      const heroServiceStub = TestBed.inject(HeroService);
      spyOn(heroServiceStub, 'getHeroes').and.returnValue(
        of([
          {
            id: 1,
            name: 'Johnny',
          },
          {
            id: 2,
            name: 'Andre',
          },
        ])
      );
      fixture.detectChanges();
    });

    describe('H2 "My Heroes"', () => {
      it('Check if exists', () => {
        const H2 = fixture.debugElement.query(By.css('h2'));
        expect(H2).toBeTruthy();
      });

      it('Check if content is "My Heroes"', () => {
        const H2: HTMLElement = fixture.debugElement.query(By.css('h2'))
          .nativeElement;
        expect(H2.textContent).toEqual('My Heroes');
      });
    });

    describe('Click action add button', () => {
      it("Add button on empty textbox doesn't add", () => {
        const heroServiceStub = TestBed.inject(HeroService);
        spyOn(heroServiceStub, 'addHero');

        const addButton: HTMLButtonElement = fixture.debugElement.query(
          By.css('div > button')
        ).nativeElement;
        addButton.click();
        fixture.detectChanges();

        expect(heroServiceStub.addHero).not.toHaveBeenCalled();
      });

      it("Add button on textbox with blank spaces doesn't add", () => {
        const heroServiceStub = TestBed.inject(HeroService);
        spyOn(heroServiceStub, 'addHero');

        const input: HTMLInputElement = fixture.debugElement.query(
          By.css('input')
        ).nativeElement;

        input.value = '   ';
        input.dispatchEvent(new Event('input'));

        const addButton: HTMLButtonElement = fixture.debugElement.query(
          By.css('div > button')
        ).nativeElement;
        addButton.click();
        fixture.detectChanges();

        expect(heroServiceStub.addHero).not.toHaveBeenCalled();
      });

      it('Add button adds to the list and clears textbox', () => {
        const heroServiceStub = TestBed.inject(HeroService);
        spyOn(heroServiceStub, 'addHero').and.returnValue(
          of({
            id: 3,
            name: 'Anibal',
          })
        );

        const input: HTMLInputElement = fixture.debugElement.query(
          By.css('input')
        ).nativeElement;

        input.value = 'Anibal';
        input.dispatchEvent(new Event('input'));

        const addButton: HTMLButtonElement = fixture.debugElement.query(
          By.css('div > button')
        ).nativeElement;
        addButton.click();
        fixture.detectChanges();

        const links: Array<HTMLAnchorElement> = fixture.debugElement
          .queryAll(By.css('a'))
          .map((a) => a.nativeElement);

        expect(links.length).toBe(3);
        expect(links[2].textContent).toContain('3 Anibal');
        expect(links[2].getAttribute('href')).toBe('/detail/3');
      });
    });
  });
});
