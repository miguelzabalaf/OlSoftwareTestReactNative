import {describe, it, expect} from '@jest/globals';
import colors from '../_colors';

describe('colors', () => {
  it('should return the correct color', () => {
    expect(colors.primary).toBe('#2038B7');
    expect(colors.secondary).toBe('#D4DDE6');
    expect(colors.tertiary).toBe('#43C0FB');
    expect(colors.black).toBe('#150F00');
    expect(colors.white).toBe('#FFFFFF');
    expect(colors.text).toBe('#464344');
    expect(colors.textMuted).toBe('#908D86');
    expect(colors.placeholder).toBe('#C9C9C9');
    expect(colors.neutral).toBe('#DFDFDF');
    expect(colors.background).toBe('#F4F5F7');
    expect(colors.border).toBe('#EBEBEB');
  });
});
