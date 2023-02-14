const { existPath, absolutePath, existFile } = require("../functions.js");

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

// Test para validar si la ruta es absoluta o relativa.
describe("absolutePath", () => {
  it("Debe cambiar a absoluta si es relativa", () => {
    absolutePath("./README.md");
    expect(absolutePath("./README.md")).toEqual(
      "C:\\Users\\Erika\\Desktop\\DEV002-md-links\\README.md"
    );
  });
  it("Debe devolver la ruta si ya es absoluta", () => {
    absolutePath("./README.md");
    expect(absolutePath("./README.md")).toEqual(
      "C:\\Users\\Erika\\Desktop\\DEV002-md-links\\README.md"
    );
  });
});

// Test para validar si es archivo es tipo .md
describe("existFile", () => {
  it("Debe devolver true si el archivo es tipo .md", () => {
    existFile("./README.md");
    expect(existFile("./README.md")).toEqual(true);
  });
  it("Debe devolver false si el archivo no es tipo .md", () => {
    existFile("./README.md");
    expect(existFile("./package.json")).toEqual(false);
  });
});