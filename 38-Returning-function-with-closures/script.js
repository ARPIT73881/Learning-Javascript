function outer() {
  const a = 4;
  function parent() {
    const b = 6;

    return function () {
      console.log(a + b);
    };
  }
  return parent();
}

const add1 = outer();

console.dir(add1);

// debugger;

// function parent() {
//   const a = 4;
//   const b = 6;
//   function add() {
//     console.log(a + b);
//   }
//   return add;
// }

// const add1 = parent();

// console.dir(add1);
