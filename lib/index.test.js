import { describe, it, expect } from 'vitest';
import { add, subtract } from './index.js';

describe('Index module exports', () => {
  it('exports Add function', () => {
    expect(add).toBeDefined();
    expect(typeof add).toBe('function');
  });

  it('exports Subtract function', () => {
    expect(subtract).toBeDefined();
    expect(typeof subtract).toBe('function');
  });

  it('Add function works correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('Subtract function works correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
