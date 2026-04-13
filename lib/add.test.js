import { describe, it, expect } from 'vitest';
import { add } from './add.js';

describe('Add test', () => {
  it('can add two numbers together', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(3, 4)).toBe(7);
    expect(add(10, -10)).toBe(0);
  });
});
