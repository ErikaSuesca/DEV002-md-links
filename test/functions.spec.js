const { existPath, absolutePath, existFile, validateReadFileMd } = require("../functions.js");

// Method process.cwd = current working directory
const currentDir = `${process.cwd()}`;

describe("existPath", () => {
  it("Debe validar cuando el path existe", () => {
    existPath("./testing/test01.md");
    expect(existPath("./testing/test01.md")).toEqual(true);
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
    expect(absolutePath(`${currentDir}\\README.md`)).toEqual(`${currentDir}\\README.md`);
  });
  it("Debe devolver la ruta si ya es absoluta", () => {
    absolutePath(`${currentDir}\\README.md`);
    expect(absolutePath(`${currentDir}\\README.md`)).toEqual(`${currentDir}\\README.md`);
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

// // Test para validar leer un archivo .md 
describe('validateReadFileMd', () => {
  it('Debe devolver el contenido del archivo', () =>{
    expect(validateReadFileMd(`${currentDir}\\test04.md`))
    .toEqual('explorar [Jest](https://jestjs.io/)');
  });
});
