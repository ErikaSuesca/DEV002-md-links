const { mdLinks } = require("./index.js");
const chalk = require('chalk');

console.log(chalk.yellow('--------------------Bienvenidos a mi librería 📁--------------------'));

mdLinks("./testing/test1.md")
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error);
  });

