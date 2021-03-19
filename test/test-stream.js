const expect = require("expect.js");
const stream = require("..");
const filter = require("../src/filter");

describe("stream module", () => {
  it("should export filter function", () => {
    expect(stream.filter).to.be(filter);
  });
});
