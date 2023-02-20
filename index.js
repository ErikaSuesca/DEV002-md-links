const {
  existPath,
  absolutePath,
  existFile,
  validateReadFileMd,
  getLinks,
  linkToObject,
} = require("./functions.js");

const chalk = require("chalk");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta exite
    if (!existPath(path)) {
      reject("The path does not exist");
    } else {
      console.log(chalk.magenta("The path exist"));
      //Se valida si la ruta es absoluta o relativa
      const pathAbsolute = absolutePath(path);
      console.log("ABSOLUTE: ", pathAbsolute);
      // Es un archivo tipo .md?
      if (existFile(pathAbsolute)) {
        console.log(chalk.green("The file is a .md type"));
        // Se valida si hay o no links 
        const text = validateReadFileMd(pathAbsolute);
        const links = getLinks(text);
        let arrayLinks = [];
        if (links != null) {
          links.forEach((element) => {
            arrayLinks.push(linkToObject(element, pathAbsolute));
          });
        } else {
          reject("The file does not have links");
        }
        console.log("LINKS: ", arrayLinks);
      } else {
        reject("The file is not .md type");
      }
    }
  });
};

module.exports = {
  mdLinks,
};
