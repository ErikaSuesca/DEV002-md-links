const { 
  existPath, 
  existMdFile, 
  convertToAbsolute, 
  getAllFilesDirectory, 
  validateDirectory, 
  analyzeMdFilesArray, 
  getStatsResult,
  getResultValidateStats,
  getLinksDocument,
  getHttpResponse,
 } = require("../functions.js");

// Method process.cwd = current working directory
const currentDir = `${process.cwd()}`;

describe("existPath", () => {
  it("Debe ser una función", () => {
    expect(typeof existPath).toBe("function");
  });
  it("Debe validar cuando el path existe", () => {
    existPath("testing/testConLinks01.md");
    expect(existPath("testing/testConLinks01.md")).toEqual(true);
  });
  it("Debe validar cuando el path no existe", () => {
    existPath("./Laura/test1.md");
    expect(existPath("./Laura/test1.md")).toEqual(false);
  });
});

// Test para validar si es archivo es tipo .md
describe("existMdFile", () => {
  it("Debe ser una función", () => {
    expect(typeof existMdFile).toBe("function");
  });
  it("Debe devolver true si el archivo es tipo .md", () => {
    existMdFile("./README.md");
    expect(existMdFile("./README.md")).toEqual(true);
  });
  it("Debe devolver false si el archivo no es tipo .md", () => {
    existMdFile("./README.md");
    expect(existMdFile("./package.json")).toEqual(false);
  });
});

// Test validacion si la ruta es absoluta o relativa
describe('convertToAbsolute', () => {
  it('Debe cambiar la ruta a absoluta si es relativa', () => {
    convertToAbsolute(`${currentDir}\\README.md`);
    expect(convertToAbsolute(`${currentDir}\\README.md`)).toBe(`${currentDir}\\README.md`);
  });
});

// Test para validar si es un directorio
describe("validateDirectory", () => {
  it("Debe ser una función", () => {
    expect(typeof validateDirectory).toBe("function");
  });
  it('Debe validar si la ruta es directorio', () => {
    validateDirectory('./Testing');
    expect(validateDirectory('./Testing'))
  })
});

// Test para leer los archivos
describe("getAllFilesDirectory", () => {
  it('Debe devolver los archivos del directorio', () => {
    expect(getAllFilesDirectory('./testing'))
    .toEqual(["./testing/testConLinks01.md", 
    "./testing/testing01/test03.js",      
    "./testing/testing01/testConLinks02.md",
    "./testing/testSinLinks0.md",])
  });
});

// Test para recorrer el array
const arrayObjects = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: './testing/testConLinks01.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: './testing/testConLinks01.md'
  },
  {
    href: 'https://nodej',
    text: 'Node.js',
    path: './testing/testConLinks01.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: './testing/testConLinks01.md'
  }
]
describe('analyzeMdFilesArray, entrega el array de objetos luego de leer cada archivo', () => {
  it('debe ser una función', () => {
    expect(typeof analyzeMdFilesArray).toBe('function')
  });
  it('retorna una promesa', () => {
    expect(typeof analyzeMdFilesArray([]).then).toBe('function')
  });
  it('retorna un array de objetos', () => {
    expect(analyzeMdFilesArray(['./testing/testConLinks01.md'])).resolves.toEqual(arrayObjects)
  });

  // Test para validar --stats
describe('getStatsResult, entrega un objeto con dos propiedades total y unique', () => {
  it('debe ser una función', () => {
    expect(typeof getStatsResult).toBe('function')
  });
  it('retorna un objeto con dos propiedades', () => {
    expect(getStatsResult([arrayObjects])).toEqual({Total: 1, Unique: 1})
  });
});

// Test para validar --Validate --stats
describe('getResultValidateStats, entrega un objeto con tres propiedadess total, unique, broken', () => {
  it('debe ser una función', () => {
    expect(typeof getResultValidateStats).toBe('function')
  });
  it('retorna un objeto con tres propiedades', () => {
    expect(getResultValidateStats([arrayObjects])).toEqual({Total: 1, Unique: 1, Broken: 0})
  });
});
});

const content = `
[Node.js](https://nodejs.org/es/)
[motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)
[Node.js](https://nodej)
[motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)`

describe('getLinksDocument, entrega el array de objetos luego de hacer match con los links', () => {
  it('debe ser una función', () => {
    expect(typeof getLinksDocument).toBe('function')
  });
  it('retorna un array de objetos', () => {
    expect(getLinksDocument('./testing/testConLinks01.md', content)).toEqual(arrayObjects)
  });
});

// Test para validar --validate
const validateObjects = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: './testing/testConLinks01.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: './testing/testConLinks01.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://nodej',
    text: 'Node.js',
    path: './testing/testConLinks01.md',
    status: 'ERROR',
    ok: 'fail'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: './testing/testConLinks01.md',
    status: 200,
    ok: 'OK'
  }
]

describe('getHttpResponse, entrega el array de objetos sumando el status y statustext', () => {
  it('debe ser una función', () => {
    expect(typeof getHttpResponse).toBe('function')
  });
  it('retorna una promesa', () => {
    expect(typeof getHttpResponse([]).then).toBe('function')
  });
  it('retorna un array de objetos', () => {
    expect(getHttpResponse(arrayObjects)).resolves.toEqual(validateObjects)
  });
});