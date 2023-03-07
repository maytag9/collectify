'use strict';

console.log(' ::::::: updating application version in package Json :::::: ');

const fs = require('fs');

let rawdata = fs.readFileSync('package.json');
let packageJson = JSON.parse(rawdata);

packageJson.version = fs.readFileSync('VERSION').toString().trim();
console.log(' ::::::: AFTER UPDATE --> ', packageJson.version);

let data = JSON.stringify(packageJson, null, 2);
fs.writeFileSync('package.json', data);
