/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10

forFactorial = 1;

for (let i = n; i >= 1; i--) {
  forFactorial *= i;
}

doFactorial = 1;
  i = n;
  do {
    doFactorial *= i;
    i--;
  } while (i >= 1);

whileFactorial = 1;
  i = n;
  while (i >= 1) {
    whileFactorial *= i;
    i--;
  }



/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str;
const substr = ['I', ' love', ' JS'];
str = '';

for (let i = 0; i < substr.length; i++){
  str +=substr[i]
}
// return str;

/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300,
};

totalIncome = 0;

for (let key in personIncomes) {
  totalIncome += personIncomes[key];
}

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome,
};
