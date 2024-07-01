import { describe, it, expect } from 'vitest';
import { calculateDoubleAge } from '../twice as old/app';


describe('calculateDoubleAge', () => {
    it('should return 22 when father is 36 and child is 7', () => {
        const padre = 36;
        const hijo = 7;
        const resultado = calculateDoubleAge(padre, hijo);
        expect(resultado).toBe(22);
    });

    it('should return 5 when father is 55 and child is 30', () => {
        const padre = 55;
        const hijo = 30;
        const resultado = calculateDoubleAge(padre, hijo);
        expect(resultado).toBe(5);
    });
    it('should return 0 when father is 42 and child is 21', () => {
        const padre = 42;
        const hijo = 21;
        const resultado = calculateDoubleAge(padre, hijo);
        expect(resultado).toBe(0);
    });
    it('should return 20 when father is 22 and child is 1', () => {
        const padre = 22;
        const hijo = 1;
        const resultado = calculateDoubleAge(padre, hijo);
        expect(resultado).toBe(20);
    });
    it('should return 29 when father is 29 and child is 0', () => {
        const padre = 29;
        const hijo = 0;
        const resultado = calculateDoubleAge(padre, hijo);
        expect(resultado).toBe(29);
    });




});
