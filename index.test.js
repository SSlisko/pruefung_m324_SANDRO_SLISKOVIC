import { calculate } from './index.js'; // Importiere die calculate-Funktion
import { expect } from 'chai'; // Verwende chai zum Vergleichen von Ergebnissen

describe('calculate', function () {
  // Test für die Addition
  it('should return the sum of two numbers when operation is add', function () {
    const result = calculate(5, 3, 'add');
    expect(result).to.equal(8);
  });

  // Test für die Subtraktion
  it('should return the difference of two numbers when operation is subtract', function () {
    const result = calculate(5, 3, 'subtract');
    expect(result).to.equal(2);
  });

  // Test für eine ungültige Operation
  it('should throw an error for an invalid operation', function () {
    expect(() => calculate(5, 3, 'multiply')).to.throw('Invalid operation');
  });
});
