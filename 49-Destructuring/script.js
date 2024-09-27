const colors = ["red", "green", "yellow", "pink", "black"];

// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];

//using destructuring
// const [color1, color2] = colors;
// const [, , color3] = colors;

//destructuring array like objects
const { 3: color4 } = colors;

const user = {
  name: "Anurag",
  age: 25,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

// const name = user.name;
// const age = user.age;

//using destructuring
// const { name, age } = user;
//changing name to username
// const { name: username, age } = user;

//multi level destructuring
// destructuring object inside object
// const { address } = user;
const {
  address: { city, state },
} = user;

//destructuring in function
// function intro(userObj) {
//   console.log(userObj);
// }

// function intro({ age, name }) {
//   console.log(age, name);
// }

// intro(user);

// function printColors(colorsArray) {
//   console.log(colorsArray);
// }
function printColors([color1, color2]) {
  console.log(color1, color2);
}

printColors(colors);
