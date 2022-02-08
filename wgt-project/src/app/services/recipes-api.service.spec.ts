import { TestBed } from '@angular/core/testing';
import { RecipesApiService } from './recipes-api.service';

describe('ApiService', () => {
  let service: RecipesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
