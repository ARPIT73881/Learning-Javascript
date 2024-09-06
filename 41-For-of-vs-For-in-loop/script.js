// const fruits = ["banana", "apple", "peach", "mango", "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i);
// }
// console.log("\n");

// for of loop
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// console.log("\n");

// const myName = "Arpit";
// for (const letter of myName) {
//   console.log(letter);
// }
// console.log("\n");

const person = {
  firstName: "Arpit",
  lastName: "Sharma",
  age: 25,
  city: "Lucknow",
};

//unable to use for of loop in object
// for (const details of person) {
//   console.log(details);
// }

// for (const key in person) {
//   console.log(key, ":", person[key]);
// }

//alternative method
//object.keys
const personKey = Object.keys(person);
// for (const newKey of personKey) {
//   console.log(newKey, "--", person[newKey]);
// }
for (const newKey1 of personKey) {
  console.log(newKey1);
}
console.log("\n");

//object.values
const personValue = Object.values(person);
for (const newKey2 of personValue) {
  console.log(newKey2);
}

console.log("\n");

//object.entries
const personEntry = Object.entries(person);
// for (const newKey3 of personEntry) {
//   console.log(newKey3);
// }
