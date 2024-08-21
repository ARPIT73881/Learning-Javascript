const user = {
  firstName: "Adarsh",
  lastName: "Singh",
  pata: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 9798897897,
      area: "787 sq km",
    },
  },
  age: 15,
  isGraduate: false,
};

let userName = "Anurag";
userName = "Arpit";

// delete user.firstName  --> delete the data firstName inside the user object

// to prevent object's value from deleting and adding
// Object.seal(user);

// to prevent object's value from deleting and adding and modifying
// Object.freeze(user);

// searching keys in objects
// mobileNumber in user -- > search for mobileNumber in user
