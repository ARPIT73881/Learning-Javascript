// ======================================================= Optional Chaining=======================================================

const user = {
  firstName: "Arpit",
  lastName: "Sharma",
  age: 25,
  address: {
    city: "Delhi",
  },
  getFullName: function () {
    return user.firstName + " " + user.lastName;
  },
};

const a = "city";

// console.log(user.getFullName?.());

// console.log(user.address && user.address.city)

// console.log(user.address?.city)
// console.log(user.address?.[a])

// =======================================================  =======================================================

// const user = {
//   firstName: "Arpit",
//   lastName: "Sharma",
//   age: 25,
//   address: {
//     city: "Lucknow",
//   },
// };

// // if (user.address) {
// //   console.log(user.address.city);
// // }

// console.log(user.address && user.address.city);
