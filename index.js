const minimist = require('minimist');
const util = require('./utils/string-util');

function print(str) {
  console.log(str);
}

const input = minimist(process.argv.slice(2))._[0];
const output = `${input} -> ${util.backwards(input)}`;
print(output);
print(`is a palindrome? ${util.stringsAreSame(input, util.backwards(input))}`);
