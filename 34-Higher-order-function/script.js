// function a(b) {
//   console.log(b);
// }

//string
// a("hello");
//number
// a(56);
//array
// a([1, 3, 4, "hell"]);
//object
// a({ username: "Arpit", userAge: 24 });

//printing the object in object format
//it will show that functions are behind the scenes object
// console.dir(a);

//another example of function is an object
// a.marks = 100;
// console.log(a.marks);

//printing string with dir
// console.dir("hello world");

//higher order function --> a()
function a(b) {
  console.dir(b);
  b();
}

// function sayHi() {
//   console.log("Hiiiiiiiiiiiiiiiiiiiiii");
// }

// const x = sayHi;
// sayHi(); // same as calling x
// x(); //same as calling function sayHi

// x.age = 34;

// a(sayHi);

// anonymous function
// callback function ---> function () {console.log("Hiiiiiiiiiiiiiiiiiiiiii");}
a(function () {
  console.log("Hiiiiiiiiiiiiiiiiiiiiii");
});
