/*
Create a Github repository called Terminal Command and add the code
from this checkpoint. Implement the touch and mkdir commands to the
terminal-commands module.
*/

const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', function(
    err
  ) {
    if (err) throw err;
    console.log('File Created!');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('directory', function(err) {
    if (err) throw err;
    console.log('Directory Created!');
  });
};
