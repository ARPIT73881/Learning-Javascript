// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//nesting promise inside promise
// fetch("https://dummyjson.com/products").then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

// ============================================================================================================================

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => console.log(err));
