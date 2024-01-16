/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(number => number * number);
console.log(squares)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const fourLetterWords = words.filter(word => word.length > 4);
console.log(fourLetterWords)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((word1, word2) => word1 + word2);
console.log(concatenatedString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: In JavaScript, array methods include map, reduce, and filter. Every one of them will compute or alter an array iteratively. Each will provide back an entirely new array according to the function's outcome.
// Using the map() method, you can create a new array by applying a function to each element of the original array.
// The filter() function applies a conditional expression to each element in an array. The element is pushed into the output array if the conditional returns true.
// And lastly the reduce() function can make an array of values be reduced to a single value. It applies a reducer function to every array element in order to obtain the output value.