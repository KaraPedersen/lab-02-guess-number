export function checkOnFishHealth(foodlevel) {
    if (foodlevel < 12) return 'ypur to low';

    if (foodlevel > 14) return 'your to high';

    return 'happyfish';
}

