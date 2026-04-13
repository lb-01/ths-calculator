import { describe, it, expect } from 'vitest';
import { subtract } from './subtract.js';

describe('Subtract test', () => {
  it('can subtract two numbers from eachother', () => {
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(9, 5)).toBe(4);
    expect(subtract(0, 7)).toBe(-7);
  });
});
