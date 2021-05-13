import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MessageService] });
    service = TestBed.inject(MessageService);
  });

  it('Can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`Messages has default value`, () => {
    expect(service.messages).toEqual([]);
  });

  it('Add messages', () => {
    service.add('Bombasto');
    expect(service.messages).toEqual(['Bombasto']);
  });
  it('Clear messages', () => {
    service.clear();
    expect(service.messages).toEqual([]);
  });
});
