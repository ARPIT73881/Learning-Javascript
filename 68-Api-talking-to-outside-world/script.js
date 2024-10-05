// const user = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

// let userData;

const image = document.querySelector("img");
const btn = document.querySelector("button");

// fetch request
btn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log("got the data");
      image.src = json.message;
    });
});

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("got the data");
//     image.src = json.message;
//   });

// post request
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
