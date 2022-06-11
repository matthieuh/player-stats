import { formatAge, formatHeight, formatWeight, formatNumber } from 'utils/format';

describe('utils/format', () => {
  describe('formatAge', () => {
    test('should work as expected', () => {
      expect(formatAge(34)).toBe('34 yrs');
      expect(formatAge(100)).toBe('100 yrs');
    });
  });

  describe('formatHeight', () => {
    test('should work as expected', () => {
      expect(formatHeight(175)).toBe('1.75 m');
      expect(formatHeight(210)).toBe('2.10 m');
      expect(formatHeight(188.4)).toBe('1.88 m');
    });
  });

  describe('formatWeight', () => {
    test('should work as expected', () => {
      expect(formatWeight(65000)).toBe('65 kg');
      expect(formatWeight(70000)).toBe('70 kg');
      expect(formatWeight(88234)).toBe('88 kg');
    });
  });

  describe('formatNumber', () => {
    test('should work as expected', () => {
      expect(formatNumber(100)).toBe('100');
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
    });
  });
});
