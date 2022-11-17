const { isEven } = require("./isEven");

describe("isEven", () => {
    it.each([
        [2],
        [100],
        [1024],
    ])("should return true when given %s", (value) => {
        expect(isEven(value)).toEqual(true);
    });

    it.each([
        [1],
        [57]
        [1343],
        // 0 is not even
        [0],
        // numbers with decimals are not even
        [2.22],
        [104.1]
    ])("should return false when given %s", (value) => {
        expect(isEven(value)).toEqual(false);
    });
})