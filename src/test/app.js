import { describe, it, expect } from 'vitest';
import { calculateDoubleAge } from '../twice as old/app.js';


describe('calculateDoubleAge', () => {
    it('should return 22 when father is 36 and child is 7', () => {
        expect(calculateDoubleAge(36, 7)).toBe(22);
    });

    it('should return 5 when father is 55 and child is 30', () => {
        expect(calculateDoubleAge(55, 30)).toBe(5);
    });

    it('should return 0 when father is 42 and child is 21', () => {
        expect(calculateDoubleAge(42, 21)).toBe(0);
    });

    it('should return 20 when father is 22 and child is 1', () => {
        expect(calculateDoubleAge(22, 1)).toBe(20);
    });

    it('should return 29 when father is 29 and child is 0', () => {
        expect(calculateDoubleAge(29, 0)).toBe(29)
    });
});
