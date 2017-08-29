import { TestBed, inject } from '@angular/core/testing';

import { AppSocketIoService } from './app-socket-io.service';

describe('AppSocketIoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSocketIoService]
    });
  });

  it('should be created', inject([AppSocketIoService], (service: AppSocketIoService) => {
    expect(service).toBeTruthy();
  }));
});
