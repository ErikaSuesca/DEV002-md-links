const {
  existPath,
  existMdFile,
  validateReadFileMd,
  getLinks,
  linkToObject,
  validateDirectory,
  httpRequest,
  readAllFilesRecursive
} = require("./functions.js");


const chalk = require("chalk");
let mdFilesArray = [];


const mdLinks = (path, options) => {

  return new Promise((resolve, reject) => {

    if (!existPath(path)) { 
     reject("The path does not exist");
    }else{
      console.log(chalk.magenta("The path exist"));
      if(validateDirectory(path)){
        readAllFilesRecursive(path).forEach(file => {
          if(existMdFile(file)){
            mdFilesArray.push(file)
          }else{
            if(mdFilesArray === []){
              console.log("no .md files")
            }
          } 
        });
      }else{
          if (existMdFile(path)) {
            mdFilesArray.push(path)
          } else {
            console.log("no .md files")
          }
        }
        if(mdFilesArray!= null){
          let arrayLinks = [];
          mdFilesArray.forEach(element => {
            const texto = validateReadFileMd(element);
            const links = getLinks(texto);
            if (links != null) {
              links.forEach((link) => {
                arrayLinks.push(linkToObject(link, element));
              });
            } else {
              console.log("The file " + element + " does not have links");
            }
          });
          console.log(arrayLinks)
        }
      }
    }
  )};

           


        
        
     
      //getFiles.forEach((file)=>{
      //f(existMdFile(file)){

    //     }
    //   })
    //} // cleelse{
    //   if(existFile(absolutePath)){
    //     mdFilesArray.push(absolutePath)
    //   }
    // }

    // if(mdFilesArray.length > 0){
    //   mdFilesArray.forEach(element => {
        

    //     //const validateLinks = (httpRequest(arrayLinks));
    //     //console.log(validateLinks)

    //     //console.log("LINKS: ", arrayLinks);
    //   }
    //   );

    //   //validateLinks(link);

    // } else{
    //   reject("No existe archivos MD");
    // }
   





    // if (isDir === true) {
    //   console.log(path + " es un directorio");
    //   const getFiles = readingDirandFile(pathAbsolute);
    //   getFiles.forEach((element) => {
    //     // Es un archivo tipo .md?
    //     if (!existFile(pathAbsolute)) {
    //       reject("The file is not .md type")
    //       // Se valida si hay o no links
    //       const texto = validateReadFileMd(element);
    //       const links = getLinks(texto);
    //       let arrayLinks = [];
    //       if (links != null) {
    //         links.forEach((link) => {
    //           arrayLinks.push(linkToObject(link, element));
    //         });
    //       } else {
    //         reject("The file " + element + " does not have links");
    //       }
    //       console.log("LINKS: ", arrayLinks);
        // } else {
        //   reject("Is not a directory");
        // }
    //   c





// const mdLinks = (path, options = { validate: false, stats: false }) => {
//   return new Promise((resolve, reject) => {
//     // Identificar si la ruta exite
//     if (!existPath(path)) {
//       reject("The path does not exist");
//     } else {
//       console.log(chalk.magenta("The path exist"));
//       // Se valida si la ruta es absoluta o relativa
//       const pathAbsolute = absolutePath(path);
//       // Se valida si es directorio
//       const isDir = validateDirectory(pathAbsolute);
//       if (isDir === true) {
//         console.log(path + " es un directorio");
//         const getFiles = readingDirandFile(pathAbsolute);
//         getFiles.forEach((element) => {
//           // Es un archivo tipo .md?
//           if (!existFile(pathAbsolute)) {
//             reject("The file is not .md type")
//             // Se valida si hay o no links
//             const texto = validateReadFileMd(element);
//             const links = getLinks(texto);
//             let arrayLinks = [];
//             if (links != null) {
//               links.forEach((link) => {
//                 arrayLinks.push(linkToObject(link, element));
//               });
//             } else {
//               reject("The file " + element + " does not have links");
//             }
//             console.log("LINKS: ", arrayLinks);
//           } else {
//             reject("Is not a directory");
//           }
//         });
//       }
//     }
//   });
// };

module.exports = {
  mdLinks,
};
