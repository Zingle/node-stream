const {Transform} = require("stream");

module.exports = filter;

/**
 * Create filter stream.
 * @param {function} filter
 * @param {object} [options]
 * @returns {Transform}
 */
function filter(filter, options={}) {
  return new Transform({
    ...options,
    transform(chunk, enc, done) {
      if (filter(chunk, enc)) this.push(chunk, enc);
      done();
    }
  })
}
