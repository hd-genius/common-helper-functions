const { sequence } = require('./functions')
const { isPresent } = require('./isPresent')
const { delay } = require('./delay')
const { isEven, isOdd, isPrime } = require('./numbers')

module.exports = {
    delay,
    isPresent,
    isEven,
    isOdd,
    isPrime,
    sequence,
}
