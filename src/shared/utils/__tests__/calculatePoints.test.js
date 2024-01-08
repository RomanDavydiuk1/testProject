import { calculatePoints } from '../pointsCalculator';
import { describe, it, expect } from '@jest/globals';
const LIMIT_FOR_TWICE_BONUS = 100;
const TWICE_RANGE_STEP = 2;
const LOWER_LIMIT_RANGE = 50;
describe('calculatePoints', () => {
  it('calculates points correctly for values below LOWER_LIMIT_RANGE', () => {
    const transactionItem = 30;
    const result = calculatePoints(transactionItem);
    expect(result).toEqual({
      x1Bonus: 0,
      x2Bonus: 0,
      total: 0,
    });
  });

  it('calculates points correctly for values between LOWER_LIMIT_RANGE and LIMIT_FOR_TWICE_BONUS', () => {
    const transactionItem = 80;
    const result = calculatePoints(transactionItem);
    const expectedTotal = transactionItem - LOWER_LIMIT_RANGE;
    expect(result).toEqual({
      x1Bonus: expectedTotal,
      x2Bonus: 0,
      total: expectedTotal,
    });
  });

  it('calculates points correctly for values above LIMIT_FOR_TWICE_BONUS', () => {
    const transactionItem = 120;
    const result = calculatePoints(transactionItem);
    const expectedX1Bonus = LIMIT_FOR_TWICE_BONUS - LOWER_LIMIT_RANGE;
    const expectedX2Bonus = (transactionItem - LIMIT_FOR_TWICE_BONUS) * TWICE_RANGE_STEP;
    const expectedTotal = expectedX1Bonus + expectedX2Bonus;
    expect(result).toEqual({
      x1Bonus: expectedX1Bonus,
      x2Bonus: expectedX2Bonus,
      total: expectedTotal,
    });
  });
});
