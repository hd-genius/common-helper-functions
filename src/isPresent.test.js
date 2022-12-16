const { isPresent } = require('./isPresent')

describe('isPresent', () => {
    it('should return false when given null', () => {
        expect(isPresent(null)).toEqual(false)
    })

    it('should return false when given undefined', () => {
        expect(isPresent(undefined)).toEqual(false)
    })

    it.each([
        [false, false],
        [0, 0],
        ['""', ''],
        [NaN, NaN],
    ])('should return true when given %s', (displayValue, value) => {
        expect(isPresent(value)).toEqual(true)
    })
})
