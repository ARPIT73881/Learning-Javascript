const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "Arpit" });
//   }, 3000);
//   //   reject("Arpit");
// });

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Promise reject");
  });
});

p.then((data) => {
  console.log(data);
  return "first return";
})
  .then((data) => {
    console.log(data);
    return "second return";
  })
  .then((data) => {
    console.log(data);
    return "third return";
  })
  .then((data) => {
    console.log(data);
    return "fourth return after the catch";
  })
  .catch((err) => {
    console.log(err);
    console.log("running the catch code");
    return "catch return code";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//micro task queue will run this code
// p.then(() => {
//   console.log("Promise resolved");
// }).catch(() => {
//   console.log("Promise rejected");
// });

// callback queue will run this code
// setTimeout(() => {
//   console.log("hiii");
// }, 3000);
