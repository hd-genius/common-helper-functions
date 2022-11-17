const { isOdd } = require("./isOdd");

describe("isOdd", () => {
    it.each([
        [1],
        [57],
        [1343],
    ])("should return true when given %s", (value) => {
        expect(isOdd(value)).toEqual(true);
    });

    it.each([
        [2],
        [100],
        [1024],
        // 0 is not odd
        [0],
        // numbers with decimals are not odd
        [2.22],
        [104.1]
    ])("should return false when given %s", (value) => {
        expect(isOdd(value)).toEqual(false);
    });
});
