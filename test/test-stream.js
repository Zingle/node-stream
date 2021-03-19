const expect = require("expect.js");
const stream = require("..");
const filter = require("../src/filter");
const map = require("../src/map");

describe("stream module", () => {
  it("should export filter function", () => {
    expect(stream.filter).to.be(filter);
  });

  it("should export map function", () => {
    expect(stream.map).to.be(map);
  });
});
