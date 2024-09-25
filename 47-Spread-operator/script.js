// spread operator can be used with arrays, strings , objects

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9, 10];

const myName = "Arpit";
//old method
// const arr3 = arr1.concat(arr2);

//spread operator
const arr4 = [...arr1, ...arr2];
const arr5 = [...arr1, ...arr2, ...myName];

const user1 = {
  name: "Arpit",
  age: 24,
};

const user2 = { ...user1, city: "Lucknow" };

function add() {
  //   console.log(arguments);
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum = sum + arguments[index];
  }
  return sum;
}

add(...arr4);
