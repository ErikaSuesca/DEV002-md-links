#!/usr/bin/env nodo
const { mdLinks } = require("./index.js");
const chalk = require('chalk');

console.log(chalk.cyan.inverse('--------------------Welcome 📁--------------------'));

mdLinks('./testing/testing01/test02.md')
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error);
  });

// ruta .md con links './testing/test01.md'
// ruta .md sin links './testing/test0.md'
// ruta archivo no .md './package.json'