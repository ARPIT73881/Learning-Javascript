// //function declaration
// function square(num) {
//   return num ** 2;
// }

// //function expression
// const cube = function (num) {
//   return num ** 3;
// };

// //arrow function expression
// const power4 = (num) => {
//   return num ** 4;
// };

const square = (num) => {
  return num ** 2;
};
// same working
const cube = (num) => num ** 3;
//const cube2 = num => num ** 3; //bracket is option for one parameter

// setTimeout(hi, 2000);
// setTimeout(() => {
//   console.log("Hello world");
// }, 2000);

// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 3000);

const random = () => {
  console.log(Math.floor(Math.random() * 10) + 1);
};
setTimeout(random, 1000);
