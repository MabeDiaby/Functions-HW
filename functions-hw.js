// # More functions practice! 

// ## SEIR 712 Jul 20, 2021

// ## More Problem solving

// Remember:

// * one step at a time (test thoroughly each step)
// * researching a step is excellent (although time-consuming)

// # 1
// ## Calculate the Cube
// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

// ```javascript
// console.log(calculateCube(5));
// ```

// > => 125

// function calculateCube (a) {
//     return a**3
// }
// console.log(calculateCube(5))

// # 2
// ## Is a Vowel?
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// ```javascript
// console.log(isAVowel("a"));
// ```

// > => true

// function isAVowel (v) {
//     if (v=="a"|| v== "e" || v=="i"|| v=="o"|| v=="u"|| v=="A"|| v=="E"|| v=="I"|| v=="O"|| v=="U") {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isAVowel("O"))

/// # 3
// ## Get Two Lengths
// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

// ```javascript
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// ```

// > => [4, 13]

// function getTwoLengths(string1, string2) {
//     return [string1.length, string2.length]
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// # 4 
// ## Get Multiple Lengths

// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array of strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.


// ```javascript
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// ```

// > => [5, 4, 2, 2, 4]

// function getMultipleLengths (arr1) {
//     arrHolder = []

//     for (i=0; i<arr1.length; i++) {
//         arrHolder.push(arr1[i].length)
//     }
//     return arrHolder
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// # 5
// ## Maximum of Three Numbers
// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. **Do not use `Math.max()`.**

// ```javascript
// console.log(maxOfThree(6, 9, 1));
// ```

// > => 9

// function maxOfThree (num1, num2, num3) {
//     if (num1 == num2 && num2 == num3 && num1 == num3){
//             return num1
//     } if (num1 > num2){
//         if (num1 > num3){
//             return num1;
//         }
//     } if (num2 >num1) {
//         if (num2 > num3){
//             return num2
//         }
//     } if (num1 == num2) {
//         if (num1 > num3) {
//             return num1
//         }
//     } if (num2 == num3 ) {
//         if(num2 > num1) {
//             return num2
//         }
//     } if (num3 == num1 ) {
//         if(num3 > num2) {
//             return num3
//         }
//     }
// }
// console.log(maxOfThree(6, 9, 1));

// # 6
// ## Print Longest Word

// Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// ```javascript
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// ```

// > => "Peanutbutter"

// function printLongestWord(arrOfString) {
//     newArr = []
//     for (let i = 0; i<arrOfString.length; i++){
//             newArr.push(arrOfString[i].length)
//         }
//         return arrOfString[newArr.indexOf(Math.max(...newArr))]
//     }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// # 7
// ## Transmogrify the Numbers
// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

// ```javascript
// console.log(transmogrify(5, 3, 2));
// ```

// > => 225

// <br>
// <hr>

// function transmogrify (num1, num2, num3) {
//     return ((num1 * num2)** num3)
// }

// console.log(transmogrify(5, 3, 2));

// # 8
// ## Project Euler Problem 2
// [Project Euler problem #2](https://projecteuler.net/problem=2)

// * Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

// * Adjust the function to push the **even numbered** values into an array.

// * Adjust the function to return the summed value of the array.

// * Find the sum of the even numbered values that do not exceed four million.

//writing a function 
// create an array called fib
// create sum to hold next number in  fib sequ.
// b and c are the first two numbers of the sequ.
// input fib numbers into array
// get sum of th value of the array

//return summed value of array


// let evenNum

// function fibSec(a){
//     let b = 0
//     let c = 1
//     let arr = []
//     var sum = 0

//     for (i=1; i<a; i++){
//         let sumAll = b + c
//         b = c
//         c = sumAll 
//         sum += sumAll
//         console.log(sumAll);
//         if ( sumAll % 2 === 0 && sumAll < 4000000) {
//             arr.push(sumAll)
//         } 
//     } console.log(arr);
//     return sum
// } 
// console.log(fibSec(10));

// # 9
// ## A Needle in the Haystack

// [From Codewars](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c)

// [Join CodeWars](www.codewars.com/r/bEqEeQ)

// Can you find the needle in the haystack?

// Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`

// After your function finds the needle it should return a message (as a string) that says:

// `"found the needle at postition"` plus the index it found the needle so:

// `find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])`

// Should return:

// `"found the needle at position 5"`

var haystack = (['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
function findNeedle(){
    for (i=0; i<haystack.length; i++)
    if (haystack[i]==="needle") {
    return `found the needle at postition ${haystack.indexOf('needle')} `
}
}
console.log(findNeedle())

// # 10 
// ## Sum the Positive

// [From Codewars](https://www.codewars.com/kata/5715eaedb436cf5606000381)

// [Join CodeWars](www.codewars.com/r/bEqEeQ)

// Given an array, return the sum of only the positive numbers

// `[1, -4, 7, 12] => 1 + 7 + 12 = 20`

// # Keep going!

// ## Finish this morning's lab if you haven't yet.

// [Join CodeWars](www.codewars.com/r/bEqEeQ) and find your own challenges to solve! Find a great one? Share it in slack!