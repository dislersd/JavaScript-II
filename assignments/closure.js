// // ==== Challenge 1: Write your own closure ====
// // Write a simple closure of your own creation.  Keep it simple!

function ninja (weapon) {
  console.log(`I am a ninja and I use a: ${weapon}`);
  // debugger;

  function ninjaTwo() {
    const shoes = 'redshoes'
    console.log(`I am also ninja and I use a: ${weapon} as well`);
    // debugger;

    function ninjaThree() {
      console.log(`I am also ninja and I use a: ${weapon} as well. I have ${shoes}`);
      // debugger;
    }
    ninjaThree();
  }
  ninjaTwo();
}

ninja('axe');

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable

// let counter = () => {}

let counter = () => {
  let count = 0;
  return function() {
    return count ++;
  }
}

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Copied from W3 schools
// let counter = ( () => {
//   let counter = 0;
//   return function() {
//     counter ++; return counter
//   }})();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.



};

