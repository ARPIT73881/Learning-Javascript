// function add(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(add(2, 3));

// function add() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// }
// add(5, 15, 30);

function sum1() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    total = total + arguments[i];
  }
  return total;
}

sum1(2, 4, 6, 10);

//arguments does not work in arrow function
//but ... operator works for es6
//rest parameter

// const sum2 = (...nums) => {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     total = total + nums[i];
//   }
//   return total;
// };

// sum2(2, 4, 6, 10);

//converting arguments into array and calculating sum of elements by reduce method
function sum3() {
  let convert = [...arguments];
  const sum = convert.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
  return sum;
}
sum3(1, 2, 3, 4);
