const {Transform} = require("stream");

module.exports = flatten;

/**
 * Create flatten stream.  Array input will be flattened.
 * @param {object} [options]
 * @returns {Transform}
 */
function flatten(options={}) {
  return new Transform({
    writableObjectMode: true,
    ...options,
    transform(chunk, enc, done) {
      if (chunk instanceof Array) for (const item of chunk) {
        this.push(item, enc);
      } else {
        this.push(chunk, enc);
      }

      done();
    }
  })
}
