import par_o_impar from './kata1';

describe('Kata #1: par o impar', () => {
    test('0 es par', () => {
      expect(par_o_impar(0)).toBe('pair');
    });
    test('1 es impar', () => {
      expect(par_o_impar(1)).toBe('unpair');
      
    });
    test('2 es par', () => {
      expect(par_o_impar(2)).toBe('pair');
      
    });
    test('3 es impar', () => {
      expect(par_o_impar(3)).toBe('unpair');
      
    });
  });


  