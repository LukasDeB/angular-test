import { TestBed, inject } from '@angular/core/testing';

import { ItemCartDataService } from './item-cart-data.service';

describe('ItemCartDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemCartDataService]
    });
  });

  it('should be created', inject([ItemCartDataService], (service: ItemCartDataService) => {
    expect(service).toBeTruthy();
  }));
});
