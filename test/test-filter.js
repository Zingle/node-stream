const expect = require("expect.js");
const {Transform} = require("stream");
const stringWriter = require("@zingle/string-writer");
const filter = require("../src/filter");

describe("filter(function, [object])", () => {
  const acceptedValue = "a";
  const rejectedValue = "b";
  const fn = v => v === acceptedValue;
  let transform;

  beforeEach(() => {
    transform = filter(fn, {decodeStrings: false});
  });

  it("should return a Transform", () => {
    expect(transform).to.be.a(Transform);
  });

  it("should pass options to Transform", () => {
    expect(transform._writableState.decodeStrings).to.be(false);
  });

  it("should pass-through values that match the filter", () => {
    const writer = stringWriter();

    transform.pipe(writer);
    transform.write(acceptedValue);
    transform.write(rejectedValue);
    transform.write(acceptedValue);

    expect(String(writer)).to.be(acceptedValue + acceptedValue);
  });
});
