import {describe, it, expect} from '@jest/globals';
import sizes from '../_sizes';

describe('sizes', () => {
  it('should return the correct size', () => {
    expect(sizes.small).toBe(10);
    expect(sizes.medium).toBe(12);
    expect(sizes.normal).toBe(14);
    expect(sizes.large).toBe(20);
    expect(sizes.extraLarge).toBe(24);
  });
});
