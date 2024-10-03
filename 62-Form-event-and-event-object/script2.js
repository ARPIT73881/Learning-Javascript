const usernameInput = document.querySelector("#username");

const para = document.querySelector(".para");

const formElement = document.querySelector("form");

// formElement.addEventListener("submit", (e) => {
//   console.log(e);

//   //to prevent the default behaviour of the form
//   e.preventDefault();
//   console.log("form clicked");
// });

// =============================form data====================================
// formElement.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const myFormData = new FormData(form)

//     for (const p of myFormData.entries()) {
//         console.log(p);
//     }
// })

formElement.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e);
  console.log(e.target);

  //also event current target
  // console.log(e.currentTarget);
  // console.log('From Clicked');
});

// formElement.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("From Submitted");
// });
