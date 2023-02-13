const { existPath } = require("../functions.js");

describe("existPath", () => {
  it("Debe validar cuando el path existe", () => {
    existPath("./testing/test1.md");
    expect(existPath("./testing/test1.md")).toEqual(true);
  });
  it("Debe validar cuando el path no existe", () => {
    existPath("./erika/test1.md");
    expect(existPath("./erika/test1.md")).toEqual(false);
  });
});
