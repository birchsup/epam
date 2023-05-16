/** Task: 1
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case if y less than 10
 * or multiplication in case of greater or equal than 10
 * result assign to z1 and z2 variables accordingly
 * Task A - if else - z1 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * Task B - ternary operator - z2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
function taskA(x, y) {
  let z1;
  //PLACE YOUR CODE BETWEEN THIS LINE:
if(y<10){
  z1 = x + y;
} else{
  z1 = x * y;
}
  //AND THIS ONE:
  return z1;
}

function taskB(x, y) {
  let z2 = (condition) ? (x * y) : (x + y);
  
  return z2;
}

/** Task: 2
 * The system receives 3 params - operator, alpha, beta.
 * Operator can have 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on the passed operator param.
 * Assign result to task2 variable
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

function calc(operator, alpha, beta) {
  let task2;
  //PLACE YOUR CODE BETWEEN THIS LINE:
  switch (operator) {
    case "add":
      task2 = alpha + beta;
      break;
    case "subtract":
      task2 = alpha - beta;
      break;
    case "multiply":
      task2 = alpha * beta;
      break;
    case "divide":
      task2 = alpha / beta;
      break;
    default:
      task2 = "Invalid operator";
  }
  //AND THIS ONE:
  return task2;
}

/**
 * Task: 3
 * Write the logic that will calculate the amount of discount
 * considering the 'ransom' amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign the result to the 'discount' variable
 */

function calculateDiscount(ransom) {
  let discount;
  //PLACE YOUR CODE BETWEEN THIS LINE:
  if (ransom >= 0 && ransom <= 350) {
    discount = 0;
  } else if (ransom >= 351 && ransom <= 1350) {
    discount = 15;
  } else if (ransom >= 1351 && ransom <= 2700) {
    discount = 30;
  } else if (ransom >= 2701 && ransom <= 6500) {
    discount = 45;
  } else {
    discount = "Invalid ransom amount";
  }
  //AND THIS ONE:
  return discount;
}

module.exports = {
  taskA,
  taskB,
  calc,
  calculateDiscount,
};
