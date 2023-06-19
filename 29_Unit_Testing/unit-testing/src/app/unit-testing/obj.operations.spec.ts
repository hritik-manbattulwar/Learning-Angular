import { IMobile, getMobile } from './obj.operations';

describe('object operations', () => {
  describe('getMobile()', () => {
    let obj: IMobile = {
      brand: 'Apple',
      color: 'silver',
      price: 110000,
    };
    it('should return the expected object', () => {
      expect(getMobile()).toEqual(obj);
    });
    it('should contain brand', () => {
      expect(Object.keys(getMobile())).toContain('brand');
    });
    it('should return brand value as Apple', () => {
      expect(getMobile().brand).toBe('Apple');
    });
  });
});
