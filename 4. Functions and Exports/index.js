/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log("Hello, " + name + "! Good Morning");
}

greet("Carl");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declarations can be called before their actual code declaration since they are fully established. In contrast, function expressions are distinct in that they can be called at multiple points in the code because they assign a function to a variable and are not established in the same way.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
let calculateArea = function(length, width) {
    return length * width;
};
console.log("Area: " + calculateArea(5, 5))

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: In situations where you want to run code after an activity has concluded, such as in event handling and asynchronous operations, callback functions are frequently utilized.
// Example
// {
//     function myFirst() {
//         myDisplayer("Hello");
//     }
      
//     function mySecond() {
//         myDisplayer("Goodbye");
//     }
      
//     mySecond();
//     myFirst();
// }

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(array, modifyFunction) {
    return array.map(modifyFunction);
}

let numbers = [1, 2, 3, 4, 5];

function incrementByOne(number) {
    return number + 1;
}

let modifiedNumbers = modifyArray(numbers, incrementByOne);

console.log("Original Numbers:", numbers);
console.log("Modified Numbers (incremented by 1):", modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const math = require('./mathUtils');
let result = math.add(5, 7);
console.log("Sum: " + result);
console.log("PI value: " + math.PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require('./isPalindrome');
console.log(isPalindrome("hello")); 
console.log(isPalindrome("radar"));

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The require() function is used to import modules in Node. js. While the module.exports make the funstions or objects available for other modules to require().
// Well it depends on what you are using, if you are working in a Node.js environment or a situation where CommonJS is the standard, you would use require and module.exports.
// But if you are working in a browser environment with native ES6 module support or in a Node.js environment with ES6 module support you should use import and export.
// Because both of them offer different advantages or disadvnatages depending on your working environment.
// But if I have to choose, I choose the ES6 modules because they are a part of the ECMAScript standard, making them a more modern and standardized approach.