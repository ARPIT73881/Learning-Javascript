const userName = "Arpit Sharma";

// unable to update the whole address as it is constant -->
// fruitsCollection = [], ["lion"] ==> this will give error
// fruitsCollection[3] = "Mango";
// fruitsCollection[4] = "Orange";
// console.log(fruitsCollection);

// const newArray = ["Lion", "Table ", { userName: "Arpit", age: 24 }];

// const newArrayTwo = [
//   "okay ",
//   {
//     object1: "value 1",
//     object2: "value 2",
//     object3: { object31: "value 3 1 ", object32: "value 3 2 " },
//   },
// ];

// const rainbowColors = [
//   "Violet",
//   "Indigo",
//   "Blue",
//   "Green",
//   "Yellow",
//   "Orange",
//   "Red",
// ];

//Adding elements in array
// fruitsCollection[fruitsCollection.length] = "Pineapple";
//  fruitsCollection.push("Orange");

const fruitsCollection = ["Apple", "Banana", "Grapes", "Dates"];
fruitsCollection[fruitsCollection.length] = "Pineapple";
fruitsCollection.push("Orange");

//Removing elements in array
//  fruitsCollection.pop();
fruitsCollection.pop();

const newObject = {};
const newArray = [];
