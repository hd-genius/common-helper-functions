const { sequence } = require('./sequence')

describe('chain', () => {
    it('should call every function it is given', () => {
        const firstFunction = jest.fn()
        const secondFunction = jest.fn()
        const thirdFunction = jest.fn()

        const combinedFunction = sequence(
            firstFunction,
            secondFunction,
            thirdFunction
        )

        combinedFunction()

        expect(firstFunction).toHaveBeenCalled()
        expect(secondFunction).toHaveBeenCalled()
        expect(thirdFunction).toHaveBeenCalled()
    })

    it.todo('should call the functions in the order that they are given')

    it('should call the functions it is given with the correct parameters', () => {
        const firstFunction = jest.fn()
        const secondFunction = jest.fn()

        const combinedFunction = sequence(firstFunction, secondFunction)

        const testParameters = [0, 'test', {}]

        combinedFunction(...testParameters)

        expect(firstFunction).toHaveBeenCalledWith(...testParameters)
        expect(secondFunction).toHaveBeenCalledWith(...testParameters)
    })
})
