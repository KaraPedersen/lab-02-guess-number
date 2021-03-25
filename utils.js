export function checkOnFishHealth(foodLevel, correctLevel) {
    if (foodLevel < correctLevel) return -1;

    if (foodLevel > correctLevel) return 1;

    if (foodLevel === correctLevel) return 0; 


}

