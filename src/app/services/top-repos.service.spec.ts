import { TestBed, inject } from '@angular/core/testing';

import { TopReposService } from './top-repos.service';

describe('TopReposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopReposService]
    });
  });

  it('should be created', inject([TopReposService], (service: TopReposService) => {
    expect(service).toBeTruthy();
  }));
});
