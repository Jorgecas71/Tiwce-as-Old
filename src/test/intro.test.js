import { describe, it, expect } from "vitest";
import { max } from "./intro.test";
import { fizzbuzz } from "./intro.test";

describe('max', () => {
    it('should return teh first argument if it is greater', ( => {
        expect(max(2, 1)).toBe(2);
    }))
});


it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
});

it('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
});

describe('fizzBuzz', () => {
    it('should return FizzBuzz if arg is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return FizzBuzz if arg is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('FizzBuzz');

    });

    it('should return Buzz if arg is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return arg as a string if it not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
})