const fs = require('fs');
const data = fs.readFileSync('file.txt');
//a execeução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());