const fs = require("fs");
const path = require("path");

// Función para validar si existe la ruta
const existPath = (paths) => fs.existsSync(paths);

// Funcion para validar si la ruta es relativa o absoluta
const absolutePath = (paths) => {
  return path.isAbsolute(paths) ? paths : path.resolve(paths);
};

const existFile = (pathAbsolute) => {
  const pathFile = path.extname(pathAbsolute);
  if (pathFile === '.md'){
    return true;
  } return false;
};

module.exports = {
  existPath,
  absolutePath,
  existFile
};

