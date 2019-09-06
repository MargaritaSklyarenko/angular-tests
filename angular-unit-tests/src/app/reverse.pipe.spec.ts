import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('123')).toBe('321');
  });

  /*it('should throw error', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform(123)).toThrowError('Is not a string');
  });*/
});
