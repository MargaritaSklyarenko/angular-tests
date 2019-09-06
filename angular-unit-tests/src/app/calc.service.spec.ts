import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { inject } from '@angular/core';

describe('CalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalcService]
  }));

  it('should be created', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service).toBeTruthy();
  });

  it('should return sum', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service.sum(3,8)).toBe(11);
  });

  it('should return sum', fakeAsync(() => {
    const service: CalcService = TestBed.get(CalcService);
    service.sumAsynk(3,8).then(result => {
      expect(result).toBe(11);
    });
    //flush();
    tick(3000);
  }));
});
