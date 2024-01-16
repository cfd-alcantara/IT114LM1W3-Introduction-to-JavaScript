/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
{
    console.log(randomNumber)
    if (randomNumber > 50) {
        console.log("more than fifty")
    }
    else {
        console.log("less than fifty")
    }
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
{
    if (randomNumber % 2 === 0) {
        console.log("The random number is even")
    }
    else {
        console.log("The random number is odd")
    }
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
{
    if (randomNumber % 3 === 0) {
        console.log("fizz")
    }
    else if (randomNumber % 5 === 0){
        console.log("buzz")
    }
    else if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
        console.log("fizzbuzz")
    }
    else {
        console.log(randomNumber)
    }
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
{
    toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
    console.log("toDisplay", toDisplay);
}

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: A switch statement is like the if statements the difference is that switch statements are particularly useful when you have a series of conditions to check against a single variable. They provide a cleaner and more readable alternative to using multiple if-else statements in such cases. 
// Code example:
// switch (expression) {
// 	case a:
// 		execute case a code block
// 		break;
// 	case b:
// 		execute case b code block
// 		break;
// 	default:
// 		execute default code block
// }


// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
{
    for (let i = 1; i <= n; i++) {
    console.log(i);
    }
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
{
    let index = 0;

    while (index < list.length) {
    console.log("While Loop" + list[index]);
    index++;
    }
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: They are almost the same except for the part where they check the condition first. In while loop it checks first if the data required satisfies the condition before running the code
// While in do while loop  it runs the code first before checking the condition.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
{
    for (const value of list) {
        console.log("For Of Loop" + value);
    }
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
{
    for (const index in list) {
        console.log("For In Loop" + list[index]);
    }
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
{
    list.forEach(function(value) {
        console.log("For Each Method" + value);
    });
}


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for of is used when you specifically want to iterate over iterable values in a clean and readable way.
// for in is used when you need to iterate over object properties. Be cautious when using it with arrays due to potential issues with prototype properties.
// And when you are working with arrays use forEach, as it provides a clean and purpose-built syntax for iterating over each element.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

// if(denominator === 0){
//     throw new Error("Division by zero error")
// } else {
//     console.log(numerator / denominator);
// }

{
    try {
        // Your code that might throw a division by zero error
        if (denominator === 0) {
            throw Error("division by zero errors");
          }

        let quotient = numerator / denominator;
      
        // The code here will not be executed if an exception occurs above
        console.log("Quotient: " + quotient);
    } catch (error) {
        // Handle the exception
        console.error("division by zero error");
    } finally {
        // Code in the finally block is executed regardless of whether an exception occurred
        console.log("Cleaning up resources");
    }
}