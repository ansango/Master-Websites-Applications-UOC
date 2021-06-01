import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
describe('HeroService', () => {
  let service: HeroService;
  beforeEach(() => {
    const heroStub = { id: {} };
    const messageServiceStub = {
      messages: <Array<string>>[],
      add(message: string) {
        this.messages.push(message);
      },
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: Hero, useValue: heroStub },
        { provide: MessageService, useValue: messageServiceStub },
      ],
    });
    service = TestBed.inject(HeroService);
  });
  it('Can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('addHero', () => {
    it('Makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const heroStub: Hero = TestBed.inject(Hero);
      service.addHero(heroStub).subscribe((res) => {
        expect(res).toEqual(heroStub);
      });
      const req = httpTestingController.expectOne('api/heroes');
      expect(req.request.method).toEqual('POST');
      req.flush(heroStub);
      httpTestingController.verify();

      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('added hero');
    });
  });
  describe('updateHero', () => {
    it('Makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const heroStub: Hero = TestBed.inject(Hero);
      service.updateHero(heroStub).subscribe((res) => {
        expect(res).toEqual(heroStub);
      });
      const req = httpTestingController.expectOne('api/heroes');
      expect(req.request.method).toEqual('PUT');
      req.flush(heroStub);
      httpTestingController.verify();

      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('updated hero');
    });
  });
  describe('getHeroes', () => {
    it('Makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const hero = TestBed.inject(Hero);
      service.getHeroes().subscribe((res) => {
        expect(res).toEqual([hero]);
      });
      const req = httpTestingController.expectOne('api/heroes');
      expect(req.request.method).toEqual('GET');
      req.flush([hero]);
      httpTestingController.verify();

      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('fetched heroes');
    });
  });

  describe('getHero', () => {
    it('Gets hero with http get', () => {
      const heroStub: Hero = TestBed.inject(Hero);
      const id = 56;
      service.getHero(id).subscribe((res) => {
        expect(res).toEqual(heroStub);
      });

      const httpTestingController = TestBed.inject(HttpTestingController);
      const req = httpTestingController.expectOne('api/heroes/56');
      expect(req.request.method).toEqual('GET');
      req.flush(heroStub);

      httpTestingController.verify();
      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('fetched hero');
    });
  });

  describe('deleteHero', () => {
    it('Deletes hero with http del', () => {
      const heroStub: Hero = TestBed.inject(Hero);
      heroStub.id = 56;
      service.deleteHero(heroStub).subscribe((res) => {
        expect(res).toEqual(heroStub);
      });

      const httpTestingController = TestBed.inject(HttpTestingController);
      const req = httpTestingController.expectOne('api/heroes/' + heroStub.id);
      expect(req.request.method).toEqual('DELETE');
      req.flush(heroStub);

      httpTestingController.verify();
      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('deleted hero');
    });

    it('Deletes hero with http del', () => {
      const heroStub: Hero = TestBed.inject(Hero);
      const id = 56;
      service.deleteHero(id).subscribe((res) => {
        expect(res).toEqual(heroStub);
      });

      const httpTestingController = TestBed.inject(HttpTestingController);
      const req = httpTestingController.expectOne('api/heroes/' + id);
      expect(req.request.method).toEqual('DELETE');
      req.flush(heroStub);

      httpTestingController.verify();

      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('deleted hero');
    });
  });

  describe('getHeroNo404', () => {
    it('Handle 404', () => {
      service.getHero(56).subscribe((res) => {
        expect(res).toEqual(undefined);
      });

      const httpTestingController = TestBed.inject(HttpTestingController);
      const req = httpTestingController.expectOne('api/heroes/56');

      spyOn(console, 'error');

      req.flush('Error', { status: 404, statusText: 'Not Found' });

      expect(console.error).toHaveBeenCalled();
      const messageService = TestBed.inject(MessageService);
      expect(messageService.messages[0]).toContain('Not Found');
    });
  });
});
