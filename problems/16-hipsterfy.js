/*
Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
const vowels = 'aeiouAEIOU';

let removeLastVowel = function(word) {
    let count = 0;
    let newWord = [];

    for(let i = word.length - 1; i >= 0; i--) {     // scan for vowels backwards
        let char = word[i];
        console.log(char);

        if(vowels.includes(char) && count === 0) {
            count++;
            char = '';   // dont add the last vowel
        }

        newWord.unshift(char);    // add every other char
        // console.log(newWord);
    }
    console.log(newWord);
    return newWord.join('');
};

let hipsterfy = function(sentence) {
    let words = sentence.split(' ');
    console.log(words);
    // let result = words.map((word) => removeLastVowel(word));
    let result = words.map(removeLastVowel);    // map method is SLICK !!
    console.log(result);
    return result.join(' ');
};

// // alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

console.log(removeLastVowel('When'));
console.log(removeLastVowel('everyone'));

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
