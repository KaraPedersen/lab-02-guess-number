export function checkOnFishHealth(foodLevel) {
    if (foodLevel < 12) return -1;

    if (foodLevel > 14) return 1;

    if (foodLevel === 13) return 0; 


}

