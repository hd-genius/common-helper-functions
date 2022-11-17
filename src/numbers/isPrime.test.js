const { isPrime } = require("./isPrime");

describe("isPrime", () => {
    it.each([
        [2],
        [3],
        [5],
        [7],
    ])("should return true when given %s", (value) => {
        expect(isPrime(value)).toEqual(true);
    });

    it.each([
        [4],
        [100],
        // 0 is not prime
        [0],
        // 1 is not prime
        [1],
    ])("should return false when given %s", (value) => {
        expect(isPrime(value)).toEqual(false);
    });
})