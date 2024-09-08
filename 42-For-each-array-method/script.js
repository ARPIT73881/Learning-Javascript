const fruits = ["banana", "apple", "peach", "mango", "grapes"];

// for of loop
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for each
// fruits.forEach(function (params) {
//   console.log("Hello");
// });

// anonymous function
// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// arrow function
fruits.forEach((fruit) => {
  console.log(fruit);
}); //return value of forEach is undefined
