import { greet } from './string.operations';

describe('string operations', () => {
  let name: string | null;
  beforeEach(() => {
    name = 'hritik';
  });

  describe('greet()', () => {
    it('should be return a msg', () => [
      expect(greet(name!)).toBe('Hello hritik'),
    ]);
    it('should be return a string', () => [
      expect(typeof greet(name!)).toBe('string'),
    ]);
  });

  afterEach(() => {
    name = null;
  });
});
