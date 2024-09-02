// const timerOne = setInterval(`console.log("Hello - 1")`, 1000);
// const timerTwo = setInterval(`console.log("Hello - 2")`, 2000);
// const timerThree = setInterval(a, 3000);

// function a() {
//   console.log("Hello World");
// }

// both works --> clearTimeout and clearInterval
// clearTimeout(timerOne);

// clearInterval(timerOne);

// clearInterval(timerTwo);
// clearInterval(timerThree);

//most common method
// const timerFour = setInterval(function () {
//   console.log("Hello Timer");
// }, 2000);

// asynchronous code
setTimeout(function () {
  console.log("Hiii - 01");
});
setTimeout(function () {
  console.log("Hiii - 02");
}, 0);

// synchronous code
console.log("Hiii - 03");
