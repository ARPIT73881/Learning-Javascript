function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// const result = addTwoNumbers(2, 5);
//addTwoNumbers(10*5 , 6+5)
// console.log(result);

const result2 = addTwoNumbers(addTwoNumbers(4, 6), addTwoNumbers(8, 12));
console.log(result2);
