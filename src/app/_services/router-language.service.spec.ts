import { TestBed } from '@angular/core/testing';

import { RouterLanguageService } from './router-language.service';

describe('RouterLanguageService', () => {
  let service: RouterLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
