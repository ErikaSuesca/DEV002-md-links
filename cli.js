#!/usr/bin/env nodo
const { mdLinks } = require("./index.js");
const chalk = require('chalk');
const process = require('process');



const path = process.argv[2]
const opcion1 = process.argv[3]
const opcion2 = process.argv[4]

if(path){
  if (opcion1 === undefined && opcion2 === undefined) {
      mdLinks(path, { validate: false, stats: false })
          .then(result => result)
  }

  /*
  if(opcion1 === '--validate' || opcion2 === '--validate'){
    console.log('opción validar')
    mdLinks();
  }
  if(opcion1 === '--stats' || opcion2 === '--stats'){
    console.log('opción stats')
  }*/

}




//console.log(chalk.cyan.inverse('--------------------Welcome 📁--------------------'));


  // if (opcion1 === undefined && opcion2 === undefined) {
  //     mdLinks(route, { validate: false, stats: false })
  //         .then(result => result)
  // } else if (opcion1 === '--validate' && opcion2 === undefined) {
  //     mdLinks(route, { validate: true, stats: false })
  //         .then(result => result)
  // } else if (opcion1 === '--stats' && opcion2 === undefined) {
  //     mdLinks(route, { validate: false, stats: true })
  //         .then(result => result)
  // } else if ((opcion1 === '--validate' && opcion2 === '--stats') || (opcion1 === '--stats' && opcion2 === '--validate')) {
  //     mdLinks(route, { validate: true, stats: true })
  //         .then(result => result)
  // } else {
  //     console.log('revisa las parametros')
  // }



// mdLinks(route, opcion1, opcion2)
// //mdLinks('./testing/test01.md', { validate: false, stats: true })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ruta .md con links './testing/test01.md'
// ruta .md sin links './testing/test0.md'
// ruta archivo no .md './package.json'
// ruta absoluta: C:\\Users\\Erika\\Desktop\\DEV002-md-links\\package.json
// ruta relativa: ./testing/test0.md