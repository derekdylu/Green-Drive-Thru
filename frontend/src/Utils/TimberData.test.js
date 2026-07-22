import { timberData } from './TimberData';

describe('timberData', () => {
  test('contains the 24 unique species from the published source table', () => {
    expect(timberData).toHaveLength(24);
    expect(new Set(timberData.map(({ name }) => name)).size).toBe(24);
    expect(new Set(timberData.map(({ speciesName }) => speciesName)).size).toBe(24);
  });

  test('provides a finite positive conversion factor for every species', () => {
    for (const { cf } of timberData) {
      expect(Number.isFinite(cf)).toBe(true);
      expect(cf).toBeGreaterThan(0);
    }
  });
});
