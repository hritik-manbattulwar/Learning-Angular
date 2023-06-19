import { sum } from './math.operations';

describe('Testing Math Operations', () => {
  describe('sum()', () => {
    it('should return the sum', () => {
      expect(sum(10, 20)).toBe(30);
    });
    it('should return an integer', () => {
      expect(typeof sum(10, 20)).toBe('number');
    });
    it('should greater than 0', () => {
      expect(sum(10, 20)).toBeGreaterThan(0);
    });
  });
});
