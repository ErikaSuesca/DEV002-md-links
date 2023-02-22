const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const axios = require('axios').default;

// Función para validar si existe la ruta
const existPath = (paths) => fs.existsSync(paths); // CUMPLE

// Función para validar si es un directorio
const validateDirectory =  (paths) => fs.statSync(paths).isDirectory(); // CUMPLE

// Función para validar si el archivo es .md y su extención
const existMdFile = (paths) => path.extname(paths) === '.md';


//Función para validar si es un File (archivo)
const validateFile = (paths) => fs.statSync(paths).isFile();
// console.log(chalk.magenta(validateFile('./testing/test01.md')));

// Función que lee un archivo .md
const validateReadFileMd = (paths) => fs.readFileSync(paths, 'utf8');

// Función para obtener los links 
const getLinks = (text) => {
  const regexLinks = /\[(.+?)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/ig;
  return text.match(regexLinks);
}

// Función para extraer los links de un archivo .md, devuelve array de objetos
const linkToObject = (db, paths) => {
  //console.log(db)
  const urlRegex = /\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/ig;
  const textRegex = /\[(\w+.+?)\]/gi;
      let extractedURL = db.match(urlRegex).toString();
      let linkURL = extractedURL.slice(1,-1);
      let extractedText = db.match(textRegex).toString();
      let linkText = extractedText.slice(1,-1);
      return {href: linkURL, text: linkText, file: paths}
}

// Función para buscar archivos .md con su ruta para poder guardarlos los archivos en un array
const readingDirandFile = (paths) => {
  const pathAbsolute = absolutePath(paths);
  let filesArray = [];
  if (absolutePath(pathAbsolute) && validateFile(paths)){
    if(existFile(pathAbsolute)){
      filesArray.push(pathAbsolute);
    }
  }else{
    const verifyReadDir = readingDirectory(paths);
    verifyReadDir.forEach((paths) => {
      filesArray = filesArray.concat(readingDirandFile(path.join(pathAbsolute, paths)));
    })
  } 
  return filesArray;
}

function httpRequest(data) {
  let promises = [];
  console.log(data)

  if (data === null || data === undefined) {
      return null
  } else {
      data.forEach(element => {
          let axiosPromise = axios({
              method: 'get',
              url:`${element.href}`,
              responseType: 'stream'
            })
            .then(response => {
              element.status = response.status;
              element.ok = response.statusText;
              return element;
            })
            .catch(error => {
              element.status = error?.response?.status;
              element.ok = 'FAIL';
              return element;
            });

            promises.push(axiosPromise);
      })
      
      return Promise.all(promises);
  }
};

function readAllFilesRecursive(route) {
  if (validateDirectory(route)) {
    const files = fs.readdirSync(route)
    return files.map((file) => {
      return readAllFilesRecursive(`${route}/${file}`)
    }).flat()

  } else {
    return [route]
  }
}








module.exports = {
  existPath,
  existMdFile,
  validateDirectory,
  validateReadFileMd,
  getLinks,
  linkToObject,
  httpRequest,
  readAllFilesRecursive
};
