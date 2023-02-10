const { mdLinks } = require("./index.js");

mdLinks("./testing")
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });
