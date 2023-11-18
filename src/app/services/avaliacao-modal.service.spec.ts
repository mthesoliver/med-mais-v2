import { TestBed } from '@angular/core/testing';

import { AvaliacaoModalService } from './avaliacao-modal.service';

describe('AvaliacaoModalService', () => {
  let service: AvaliacaoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
