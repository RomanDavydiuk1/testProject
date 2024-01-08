
const LIMIT_FOR_TWICE_BONUS = 100;
const TWICE_RANGE_STEP = 2;
const LOWER_LIMIT_RANGE = 50;

export const calculatePoints = (transactionItem) => {
    const cleanValue = Math.floor(transactionItem);
    let x2Bonus = 0;
    let x1Bonus = 0;
  
    if (cleanValue > LOWER_LIMIT_RANGE) {
      if (cleanValue > LIMIT_FOR_TWICE_BONUS) {
        x2Bonus = (cleanValue - LIMIT_FOR_TWICE_BONUS) * TWICE_RANGE_STEP;
        x1Bonus = LOWER_LIMIT_RANGE;
      } else {
        x1Bonus = cleanValue - LOWER_LIMIT_RANGE;
      }
    }
  
    return {
      x1Bonus,
      x2Bonus,
      total: x1Bonus + x2Bonus,
    };
  };

