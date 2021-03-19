const expect = require("expect.js");
const {Transform} = require("stream");
const stringWriter = require("@zingle/string-writer");
const map = require("../src/map");

describe("map(function, [object])", () => {
  const fn = v => `[${v}]`;
  let transform;

  beforeEach(() => {
    transform = map(fn, {decodeStrings: false});
  });

  it("should return a Transform", () => {
    expect(transform).to.be.a(Transform);
  });

  it("should pass options to Transform", () => {
    expect(transform._writableState.decodeStrings).to.be(false);
  });

  it("should generate mapped values", () => {
    const writer = stringWriter();

    transform.pipe(writer);
    transform.write("a");
    transform.write("b");

    expect(String(writer)).to.be("[a][b]");
  });
});
