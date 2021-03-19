const expect = require("expect.js");
const {Transform} = require("stream");
const stringWriter = require("@zingle/string-writer");
const flatten = require("../src/flatten");

describe("flatten([object])", () => {
  let transform;

  beforeEach(() => {
    transform = flatten({decodeStrings: false});
  });

  it("should return a Transform", () => {
    expect(transform).to.be.a(Transform);
  });

  it("should pass options to Transform", () => {
    expect(transform._writableState.decodeStrings).to.be(false);
  });

  it("should put writable side of stream into object mode", () => {
    expect(transform._writableState.objectMode).to.be(true);
    expect(transform._readableState.objectMode).to.be(false);
  });

  it("should flatten Array input", () => {
    const writer = stringWriter();

    transform.pipe(writer);
    transform.write(["a", "b"]);
    transform.write(["c", "d"]);

    expect(String(writer)).to.be("abcd");
  });

  it("should pass-through non-Array input", () => {
    const writer = stringWriter();

    transform.pipe(writer);
    transform.write(["a", "b"]);
    transform.write("c");
    transform.write(["d"]);

    expect(String(writer)).to.be("abcd");
  });
});
