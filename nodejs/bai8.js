const readline = require('readline');
const code = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
code.question('Input value a: ', (a) => {
code.question('Inputvalue b: ', (b) => {
    console.log('Sum:' + (+a + +b));
    console.log('Difference:'  + (+a - +b));
    console.log('Product:' + (+a * +b));
    console.log('Quotient:' + (+a / +b));
    rl.close();
  });
});