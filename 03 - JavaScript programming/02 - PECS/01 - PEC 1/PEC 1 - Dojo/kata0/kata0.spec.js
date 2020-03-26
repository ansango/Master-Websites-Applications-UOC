import sumatorio from './kata0';

describe('Kata #0: sumatorio', () => {
    test('de 0 es 0', () => {
      expect(sumatorio(0)).toBe(0);
    });
    test('de 1 es 1', () => {
        expect(sumatorio(1)).toBe(1);
      });
      test('de 3 es 6', () => {
        expect(sumatorio(3)).toBe(6);
      });
  });