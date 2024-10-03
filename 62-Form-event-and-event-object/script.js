// const input = document.querySelector("input");
const usernameInput = document.querySelector("#username");

const para = document.querySelector(".para");

//single click event
// usernameInput.addEventListener("click", () => {
//   console.log("added click event");
// });

//double click event
// usernameInput.addEventListener("dblclick", () => {
//   console.log("added double click event");
// });

// usernameInput.addEventListener("input", () => {
//   console.log("added input event");
// });

// =============================input event=============================
// usernameInput.addEventListener("input", (e) => {
//   //   console.log(e);
//   //to get the typed value
//   //   console.log(e.target.value);

//   //   updating value of p
//   //   para.innerText = e.target.value;

//   const enteredData = e.target.value;
//   para.innerText = enteredData;
// });

// =================================change event==================================
// usernameInput.addEventListener("change", (e) => {
//   const enteredData = e.target.value;
//   para.innerText = enteredData;
// });

// =================================focus event==================================
usernameInput.addEventListener("focus", (e) => {
  console.log(e);
  console.log("focus event");
});

// =================================blur event==================================
usernameInput.addEventListener("blur", (e) => {
  console.log(e);
  console.log("blur event");
});
