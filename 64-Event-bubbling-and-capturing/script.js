const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

//clicking only once
// blue event
blue.addEventListener(
  "click",
  (e) => {
    console.log("1- blue clicked");
  },
  { once: true }
);

// ================================event bubbling=============================

// // blue event
// blue.addEventListener("click", (e) => {
//   console.log("1- blue clicked");
// });

// //pink event
// pink.addEventListener("click", (e) => {
//   console.log("2- pink clicked");
// });

// //green event
// green.addEventListener("click", (e) => {
//   //stop the event to propagate or simply stop the event from expanding outside or bubbling outside
//   //   e.stopPropagation();
//   console.log("3- green clicked");
// });

// // body event
// document.body.addEventListener("click", (e) => {
//   console.log("4- body clicked");
// });

// // document event
// document.addEventListener("click", (e) => {
//   console.log("5- document clicked");
// });

// // window event
// window.addEventListener("click", (e) => {
//   console.log("6- window clicked");
// });

// ================================event capturing=============================

// // blue event
// blue.addEventListener(
//   "click",
//   (e) => {
//     console.log("1- blue clicked");
//   },
//   true
// );

// //pink event
// pink.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("2- pink clicked");
//   },
//   { capture: true }
// );

// //green event
// green.addEventListener(
//   "click",
//   (e) => {
//     //stop the event to propagate or simply stop the event from expanding outside or bubbling outside
//     //   e.stopPropagation();
//     console.log("3- green clicked");
//   },
//   true
// );

// // body event
// document.body.addEventListener(
//   "click",
//   (e) => {
//     console.log("4- body clicked");
//   },
//   true
// );

// // document event
// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("5- document clicked");
//   },
//   true
// );

// // window event
// window.addEventListener(
//   "click",
//   (e) => {
//     console.log("6- window clicked");
//   },
//   true
// );
