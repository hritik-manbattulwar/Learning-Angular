import { colors } from './array.operations';

describe('Array Operations', () => {
  describe('colors', () => {
    it('should have a length greater than 3', () => {
      expect(colors().length).toBeGreaterThan(3);
    });
    it('should contain color red', () => {
      expect(colors()).toContain('red');
    });
    it('index 1 should be black', () => {
      expect(colors().indexOf('black')).toBe(1);
    });
  });
});
