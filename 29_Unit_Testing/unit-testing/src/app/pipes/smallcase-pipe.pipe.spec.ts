import { SmallcasePipe } from './smallcase-pipe.pipe';

describe('SmallcasePipePipe', () => {
  it('create an instance', () => {
    const pipe = new SmallcasePipe();
    expect(pipe).toBeTruthy();
  });
  it('Transform ANGULAR to angular', () => {
    const pipe = new SmallcasePipe();
    expect(pipe.transform('ANGULAR')).toBe('angular');
  });
});
