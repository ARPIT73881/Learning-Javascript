// some
//works similar to or --> if any value is true it will return true

// const evenNumbers = [0, 2, 4, 6, 8];

// evenNumbers.some((num) => {
//   console.log(num);
// });

// evenNumbers.some((num, i, arr) => {
//   console.log(num, i, arr);
// });

//false
// evenNumbers.some((num) => {
//   return num > 100;
// });

//true
// evenNumbers.some((num) => {
//   return num > 4;
// });

// const evenNumbers = [0, 2, 4, 6, 8, 9];

// evenNumbers.some((num, i) => {
//   //   return num % 2 === 0;
//   if (num % 2 === 1) {
//     console.log(num, i);
//   }
// });

// every
//works similar to and --> if all the values are true it will return true
const evenNumbers = [0, 2, 4, 6, 8, 9];
evenNumbers.every((num) => {
  return num % 2 === 1;
});
