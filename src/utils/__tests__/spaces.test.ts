import {describe, it, expect} from '@jest/globals';
import spaces from '../_spaces';

describe('spaces', () => {
  it('should return the correct space', () => {
    expect(spaces.s2).toBe(2);
    expect(spaces.s4).toBe(4);
    expect(spaces.s6).toBe(6);
    expect(spaces.s8).toBe(8);
    expect(spaces.s10).toBe(10);
    expect(spaces.s12).toBe(12);
    expect(spaces.s14).toBe(14);
    expect(spaces.s16).toBe(16);
    expect(spaces.s18).toBe(18);
    expect(spaces.s20).toBe(20);
    expect(spaces.s22).toBe(22);
    expect(spaces.s24).toBe(24);
    expect(spaces.s26).toBe(26);
    expect(spaces.s28).toBe(28);
    expect(spaces.s30).toBe(30);
  });
});
