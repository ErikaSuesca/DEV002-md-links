const { mdLinks } = require("./index.js");
const chalk = require('chalk');

console.log(chalk.yellow('--------------------Bienvenidos a mi librería 📁--------------------'));

mdLinks("./testing")
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });
