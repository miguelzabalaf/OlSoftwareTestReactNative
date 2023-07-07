// Dependencies
import {describe, it, expect} from '@jest/globals';

// Sizes
import sizes from '../_sizes';

describe('sizes', () => {
  it('should return the correct size', () => {
    expect(sizes.small).toBe(12);
    expect(sizes.medium).toBe(14);
    expect(sizes.normal).toBe(16);
    expect(sizes.large).toBe(24);
    expect(sizes.extraLarge).toBe(30);
  });
});
