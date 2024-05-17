/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// let vowelObj = {
//     a: 0, e: 1, i: 2, o: 3, u: 4
// }
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];

const vowels = 'aeiou';

// helper func to identify vowels
const vowelIndex = vowel => {
    if(vowel === 'a') return 0;
    if(vowel === 'e') return 1;
    if(vowel === 'i') return 2;
    if(vowel === 'o') return 3;
    if(vowel === 'u') return 4;
}

let hasThreeVowels = function(string) {
    let uniqueCount = 0;
    let vowelCount = [0, 0, 0, 0, 0];
    let stringArr = string.split('');

    stringArr.forEach((ltr) => {
        if(vowels.includes(ltr)) {
            let index = vowelIndex(ltr);
            console.log(index)
            vowelCount[index] += 1;         // populate array with each vowel count
            console.log(vowelCount);
        }
    })

    // count unique vowels
    vowelCount.forEach((num) => {
        if(num !== 0) uniqueCount++;
        console.log(uniqueCount);
    })

    if(uniqueCount >= 3) return true;
    return false;
};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
