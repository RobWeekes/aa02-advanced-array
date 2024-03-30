/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.

Examples:

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
*/


let sumForEach = function(arr) {
    let sum = 0;

    arr.forEach((index) => {
        let num = index;
        console.log(num);
        sum = sum + num;
        console.log(sum);
        // console.log(sum += num);
    })
    return sum;
};

// let sumForEach = function(arr) {
//   let sum = 0;

//   for(let i = 0; i < arr.length; i++) {
//       let num = arr[i];
//       console.log(num);
//       sum = sum + num;
//       console.log(sum);

//   }
//   return sum;
// };


console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumForEach;
} catch (e) {
  module.exports = null;
}
