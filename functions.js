const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Función para validar si existe la ruta
const existPath = (paths) => fs.existsSync(paths);

// Función para validar si la ruta es absoluta o relativa, y si es relativa la convierte a absoluta
const absolutePath = (paths) => {
  return path.isAbsolute(paths) ? paths : path.resolve(paths); 
};

// Funcion para validar si el archivo es .md y su extención
const existFile = (paths) => path.extname(paths) === '.md';

//Función para validar si es un File (archivo)
const validateFile = (paths) => fs.statSync(paths).isFile();
console.log(chalk.magenta(validateFile('./testing/Test0.md')));

// Función para validar si es un directorio
const validateDirectory =  (paths) => fs.statSync(paths).isDirectory();
console.log(chalk.blue(validateDirectory('./testing')));

// Función para leer un directorio
const readingDirectory = (paths) => fs.readdirSync(paths);
console.log(chalk.yellow(readingDirectory('./testing')));

// Función que lee un archivo .md
const validateReadFileMd = (paths) => fs.readFileSync(paths, 'utf8');
console.log(chalk.blue(validateReadFileMd('./testing/test1.md')));


module.exports = {
  existPath,
  absolutePath,
  existFile,
  validateFile,
  validateDirectory,
  readingDirectory,
};
