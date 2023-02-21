const {
  existPath,
  absolutePath,
  existFile,
  validateReadFileMd,
  getLinks,
  linkToObject,
  validateDirectory,
  readingDirandFile,
} = require("./functions.js");

const chalk = require("chalk");

const mdLinks = (path, options = { validate: false, stats: false }) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta exite
    if (!existPath(path)) {
      reject("The path does not exist");
    } else {
      console.log(chalk.magenta("The path exist"));
      // Se valida si la ruta es absoluta o relativa
      const pathAbsolute = absolutePath(path);
      // Se valida si es directorio
      if (validateDirectory(pathAbsolute)) {
        console.log(path + " es un directorio");
        const getFiles = readingDirandFile(pathAbsolute);
        getFiles.forEach((element) => {
          // Es un archivo tipo .md?
          if (existFile(element)) {
            console.log(chalk.green("The file is a .md type"));
            // Se valida si hay o no links
            const texto = validateReadFileMd(element);
            const links = getLinks(texto);
            let arrayLinks = [];
            if (links != null) {
              links.forEach((link) => {
                arrayLinks.push(linkToObject(link, element));
              });
            } else {
              reject("The file does not have links");
            }
            console.log("LINKS: ", arrayLinks);
          } else {
            reject("Is not a directory");
          }
        });
      } else {
        reject("The file is not .md type");
      }
    }
  });
};

module.exports = {
  mdLinks,
};
