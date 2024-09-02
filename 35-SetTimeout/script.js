//printing and running a javascript code
// setTimeout(console.log("Hello Timeout"));
// setTimeout(console.log(true));

//error
// setTimeout(3);
// setTimeout("hi");

//run as a javascript code
// setTimeout("console.log(true)", 2000);
// setTimeout("console.log('Arpit')", 2500);

// setTimeout(
//   `console.log('Arpit')
//     console.log(true)
//     console.log(false)`,
//   2000
// );

// let timerOne = setTimeout("console.log('hi-one')", 1000);
// let timerTwo = setTimeout("console.log('hi-two')", 2000);
// let timerThree = setTimeout("console.log('hi-three')", 3000);

// clearTimeout(timerTwo);
// clearTimeout(timerOne);

// it works same as clear timeout
// clearInterval(timerOne);

let timerOne = setTimeout("console.log('hi-one')", 1000);
let timerTwo = setTimeout("console.log('hi-two')", 2000);
let timerThree = setTimeout(a, 3000);
// let timerThreeArguments = setTimeout(a, 3000, "Argument-1", 2, 3, "Arg-04");

function a() {
  //   console.log(arguments);
  console.log("hello world");
}
