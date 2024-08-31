// var username = "Arpit";
// console.log(username);

// give undefined --> as undefined is stored in the memory creation phase
console.log(username);
var username = "Arpit";

//works fine
hello();
function hello() {
  console.log("Hello there !");
}

// error --> cannot access before declaration
// hey();
// const hey = function () {
//   console.log("hey");
// };

// error --> heylol is not a function
heylol();

//function expression
var heylol = function () {
  console.log("heylol");
};

// give error --> cannot access before declaration
// console.log(username2);
// let username2 = "Arpit";

// give error --> cannot access before declaration
// console.log(username3);
// const username3 = "Arpit";

// anonymous function
// IIFE
