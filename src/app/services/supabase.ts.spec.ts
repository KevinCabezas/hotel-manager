import { TestBed } from '@angular/core/testing';

import { SupabaseTs } from './supabase.ts';

describe('SupabaseTs', () => {
  let service: SupabaseTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
