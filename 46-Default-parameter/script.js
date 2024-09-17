function multiply(a, b = 1) {
  return a * b;
}

//do not override default parameter
//multiply(a, b = 1) = multiply(2) = 2
//multiply(a, b = 1) = multiply(2, undefined) = 2

//for falsy values
//multiply(a, b = 1) = multiply(2, null) = 2 * 0 = 0
//multiply(a, b = 1) = multiply(2, "") = 2 * 0 = 0

//default value = 6 , if no value is passed
function rollADie(side = 6) {
  return Math.floor(Math.random() * side) + 1;
}
