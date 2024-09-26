const nums1 = [1, 2, 3, 4];

// function add(arguments) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// function add(...nums) {
//   console.log(nums);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }
//   return sum;
// }

// function add(a, b, ...nums) {
//   console.log(a, b);
//   console.log("nums: ", nums);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }
//   return sum;
// }

function add(...nums) {
  // 1 - spread operator --> converting arguments into array
  //   return [...nums].reduce((acc, curr) => acc + curr);

  //2 - array from method
  //   return Array.from(arguments).reduce((acc, curr) => acc + curr);

  //3 - rest parameter
  return nums.reduce((acc, curr) => acc + curr);
}
const result = add(5, 6, 7, 8, 9, 10);
