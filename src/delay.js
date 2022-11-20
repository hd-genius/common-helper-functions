/**
 *
 * @param {number} ms the number of miliseconds to delay
 * @returns {Promise} a promise that resolves after the amount of time has passed
 */
exports.delay = (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(), ms))
