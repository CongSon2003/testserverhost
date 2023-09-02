const path = require('path');

const url = './a.txt';

// parse : Phan Tich;
let result = path.parse(url);
console.log(`Name folder of the file : ${result.name}`);
console.log(`Extenstion folder of the file : ${result.ext}`);



