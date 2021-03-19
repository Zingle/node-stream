const {Transform} = require("stream");

module.exports = map;

/**
 * Create map stream.
 * @param {function} map
 * @param {object} [options]
 * @returns {Transform}
 */
function map(map, options={}) {
  return new Transform({
    ...options,
    transform(chunk, enc, done) {
      this.push(map(chunk, enc), enc);
      done();
    }
  })
}
