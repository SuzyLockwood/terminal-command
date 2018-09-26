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
  // your code here
};

module.exports.mkdir = () => {
  // your code here
};
