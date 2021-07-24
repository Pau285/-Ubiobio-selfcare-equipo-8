import { TestBed } from '@angular/core/testing';

import { ItemsSintomas } from './items.sintomas';

describe('ItemsSintomas', () => {
  let sintomas: ItemsSintomas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sintomas = TestBed.inject(ItemsSintomas);
  });

  it('should be created', () => {
    expect(sintomas).toBeTruthy();
  });
});
