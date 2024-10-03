// const inputElement = document.querySelector("input");

// inputElement.addEventListener("keypress", (e) => {
//   //   console.log(e);
//   console.log("key is being pressed");
// });

const h1 = document.querySelector("h1");

//focus on h1 using tabindex = 0
// h1.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

//but we focus on window instead of selecting individual elements

// ==============================keypress=============================================
// window.addEventListener("keypress", (e) => {
//   console.log(`key code =  ${e.code}`);
//   console.log(`key value  = ${e.key}`);
// });

// ====================================key up===============================
// window.addEventListener("keyup", (e) => {
//   console.log(`key code =  ${e.code}`);
//   console.log(`key value  = ${e.key}`);
// });

// / ====================================key down===============================
window.addEventListener("keydown", (e) => {
  console.log(`key code =  ${e.code}`);
  console.log(`key value  = ${e.key}`);
});
