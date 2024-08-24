// const userName1 = "Arpit";
// let userName2 = userName1;

// let userName3 = userName2;
// let userName3 = userName1 + "Sharma";

// const fruits = ["Mango", "Apple", "Orange"];
// const myFruits = fruits.concat("Grapes", "Dates");

// const myFruits = fruits.push("Grapes", "Dates"); //it will modify the existing array
// const myFruits = fruits;
// myFruits.push("Grapes", "Dates");

// const user1 = {
//   firstName: "Arpit",
//   lastName: "Singh",
// };

// const user2 = user1;

// user2.lastName = "Sharma";

// let numOne = 8;
// let numTwo = num1;
// numTwo = 20;

// const userOne = {
//   Name: "Arpit",
//   Age: 24,
// };

// spread operator --> ES6
// const userTwo = { ...userOne };
// userTwo.Name = "Ashu";

// const userTwo = {};
// Object.assign(userTwo, userOne);
// userTwo.Name = "Ashu";

// const arrayOne = ["Mango", "Apple", "Orange"];

//object assign method
// const arrayTwo = [];
// Object.assign(arrayTwo, arrayOne);
// arrayTwo[0] = "Guava";

// spread operator
// const arrayTwo = [...arrayOne];
// arrayTwo[0] = "Banana";

//concat method
// const arrayTwo = [].concat(arrayOne)

//slice() method
// const arrayTwo = arrayOne.slice();

// const user1 = {
//   firstName: "Arpit",
//   lastName: "Singh",
//   pata: {
//     city: "lucknow",
//     pin: 226016,
//   },
// };

// const user2 = { ...user1 };
// user1.firstName = "rahul";
// user2.lastName = "sharma";

const userOne = {
  firstName: "Arpit",
  lastName: "Sharma",
  pata: {
    city: "lucknow",
    pin: 226016,
  },
  subject: ["Physics ", "Chemistry", "Maths"],
};

const userTwo = { ...userOne };

//okay
userTwo.firstName = "Rahul";
//but if we change the value of object or array then its value will be changed in both
userTwo.subject.push("Computer");

//deep copy
const userThree = JSON.parse(JSON.stringify(userOne));
