import { getCarIconSummary } from './Portal';

describe('getCarIconSummary', () => {
  test('caps icon rendering for very large calculator results', () => {
    expect(getCarIconSummary(1_000_000)).toEqual({
      hidden: 999_900,
      visible: 100,
    });
  });

  test('rejects non-finite results', () => {
    expect(getCarIconSummary(Infinity)).toEqual({
      hidden: 0,
      visible: 0,
    });
  });
});
