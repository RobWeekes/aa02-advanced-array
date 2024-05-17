/*
Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
*/

// using FOR EACH -- getting undefined --
// let twoDimensionalProduct = function(arr) {
//   let product = 1;
//   arr.forEach(row => {
//       for(let i = 0; i < arr.length; i++) {

//               console.log(arr[i])
//               console.log(row)
//               console.log(arr[i][row])
//               product *= arr[i][row];
//               console.log(product);
//       }

//   })


//   console.log(product);
//   return product;
// };


// standard for loops
let twoDimensionalProduct = function(arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
            console.log(product);
        }
    }
    console.log(product);
    return product;
};

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}
