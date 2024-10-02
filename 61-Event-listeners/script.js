const h1 = document.querySelector("h1");

const card = document.querySelector(".card");

const div = document.querySelector(".container");

// function sayHi() {
//   console.log("clicked");
// }

// h1.onclick = sayHi;

// best method is to addEventListener
// h1.addEventListener("click", sayHi);
// h1.addEventListener("click", () => {
//   console.log("second h1");
// });

let count = 1;

card.addEventListener("click", () => {
  //by creating new card element
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  //adding number functionaliy
  // newCard.innerText = count;
  // count++;
  newCard.innerText = count++;

  //by cloneNode method
  // const newCard = card.cloneNode();
  div.append(newCard);
});
