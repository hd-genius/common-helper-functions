const { delay } = require('./delay')

describe('delay', () => {
    it('should resolve after the given delay', (done) => {
        jest.useFakeTimers()
        const callback = jest.fn()
        delay(500).then(callback)
        jest.advanceTimersByTime(501)
        jest.useRealTimers()
        setTimeout(() => {
            expect(callback).toHaveBeenCalled()
            done()
        }, 1)
    })

    it('should not resolve before the given delay', () => {
        jest.useFakeTimers()
        const callback = jest.fn()
        delay(500).then(callback)
        jest.advanceTimersByTime(499)
        expect(callback).not.toHaveBeenCalled()
    })
})
