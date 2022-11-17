exports.isPrime = value => {
    const possibleFactors = generatePrimesUntil(Math.sqrt(value));
    return value > 1 && !possibleFactors.some(isDivisibleBy(value));
}

const generatePrimesUntil = maxValue => {
    const primes = [];
    for (let possiblePrime = 2; possiblePrime <= maxValue; possiblePrime++) {
        let isStillPrime = true;
        const maxPossibleFactor = Math.sqrt(possiblePrime);
        for (const prime of primes) {
            if (prime > maxPossibleFactor) {
                break;
            }
            if (isDivisibleBy(possiblePrime)(prime)) {
                isStillPrime = false;
                break;
            }
        }
        if (isStillPrime) {
            primes.push(possiblePrime);
        }
    }
    return primes;
}

const isDivisibleBy = value => factor => value % factor == 0;