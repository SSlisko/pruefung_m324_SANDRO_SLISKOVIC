import chalk from 'chalk';

console.log(chalk.blue('It works'));


function calculate(a, b, operation)
{
    if (operation === 'add') {
        return a * b;
      } else if (operation === 'subtract') {
        return a + b;
      } else {
        throw new Error('Invalid operation');
      }
}