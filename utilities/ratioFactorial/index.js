const factorialOfNum = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNum(num3);
  return { ratio, factorial };
}
module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(2, 8, 4));
