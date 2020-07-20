const readline = require('readline');
const { exit } = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please Enter Input: ', (answer) => {
  console.log(answer.split('').reverse().join(''));
  exit();
});