// Closures in JavaScript

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


function wrapperFunc(firstName, lastName) {
  function innerFunc() {
    console.log(`${firstName} ${lastName}`);
  }
  return innerFunc;
}

const getFunVal = wrapperFunc("Ashish", "Kumar");
console.log(getFunVal);
