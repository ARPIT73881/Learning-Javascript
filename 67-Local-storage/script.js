const nameElement = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name");
const ageElement = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age");

// storing object in local storage
// const userData = {
//   userName: "",
//   userAge: "",
// };
const userData = JSON.parse(localStorage.getItem("userData")) || {};

if (userData.userName) nameElement.innerText = userData.userName;
if (userData.userAge) ageElement.innerText = userData.userAge;

nameInput.addEventListener("input", (e) => {
  nameElement.innerText = e.target.value;
  userData.userName = e.target.value;
  localStorage.setItem("userData", JSON.stringify(userData));
});
ageInput.addEventListener("input", (e) => {
  ageElement.innerText = e.target.value;
  userData.userAge = e.target.value;
  localStorage.setItem("userData", JSON.stringify(userData));
});

// nameInput.addEventListener();

// // right approach
// nameElement.innerText = localStorage.getItem("myName");

// nameInput.addEventListener("input", (e) => {
//   localStorage.setItem("myName", e.target.value);
//   myElement.innerText = localStorage.getItem("myName");
// });

// ageElement.innerText = localStorage.getItem("myAge");

// ageInput.addEventListener("input", (e) => {
//   localStorage.setItem("myAge", e.target.value);
//   ageElement.innerText = localStorage.getItem("myAge");
// });

// myElement.innerText = localStorage.myName;

// nameInput.addEventListener("input", (e) => {
//   localStorage.myName = e.target.value;
//   myElement.innerText = localStorage.myName;
// });
