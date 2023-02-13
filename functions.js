const fs = require("fs");

const relativePath = (path) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta exite
    if (fs.existsSync(path)) {
      resolve("The path is absolute");
    } else {
      //Si la ruta no existe se rechaza la promesa
      reject("The path is not absolute");
    }
  });
};

module.exports = {
  relativePath,
};

