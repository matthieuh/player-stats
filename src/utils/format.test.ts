import {
  formatAge,
  formatHeight,
  formatWeight,
  formatNumber,
  formatDate,
  formatDuration,
} from 'utils/format';

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

  describe('formatDate', () => {
    test('should work as expected', () => {
      expect(formatDate('2021-05-16T13:26:00.000Z')).toBe('5/16/2021');
      expect(formatDate('2022-12-02T13:26:00.000Z')).toBe('12/2/2022');
      expect(formatDate('1990-10-27T13:26:00.000Z')).toBe('10/27/1990');
    });
  });

  describe('formatDuration', () => {
    test('should work as expected', () => {
      expect(formatDuration('2021-05-16T23:26:00.000Z', '2021-05-16T23:26:00.000Z')).toBe('0h 0min');
      expect(formatDuration('2022-12-02T23:26:00.000Z', '2021-05-16T14:12:00.000Z')).toBe('13569h 14min');
      expect(formatDuration('1990-10-27T04:12:00.000Z', '1990-10-27T12:26:00.000Z')).toBe('8h 13min');
    });
  });
});
