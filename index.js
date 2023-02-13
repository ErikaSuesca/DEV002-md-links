const { relativePath } = require("./functions.js");
const chalk = require("chalk");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta exite
    relativePath()
      .then((respuesta) => {
        console.log(chalk.yellow(respuesta));
      })
      .catch((error) => {
        console.log(chalk.blue(error));
      });
  });
};

module.exports = {
  mdLinks,
};
