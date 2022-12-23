/**
 *
 * @param  {...any} functions
 * @returns {() => void}
 * @since 1.1.0
 */
exports.sequence =
    (...functions) =>
    (...params) => {
        functions.forEach((fn) => fn(...params))
    }
