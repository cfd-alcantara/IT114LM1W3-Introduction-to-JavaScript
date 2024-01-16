/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
{
    var name = "Axel";
    console.log(name)

    console.log(name2);
    var name2 = "Laharl";
}


// TODO 1.2 Use the let keyword to define a variable.
// Your code here
{
    let name3 = "Flonne";
    console.log(name3)
}

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
{
    const name4 = "Etna";
}

// name4 = "Killia";
// console.log(name4)
// Results in an error because a const variable cannnot be changed

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is function-scoped meaning it be accessed within the function it is declared in. let is a block-scoped meaning they are only accessible within the block they are declared in and let variable can have its value change.
// const variable is almost like the let variable but its value cannot be change.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
{
    var num1 = 5;
    var num2 = 5;
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
}

// Checkpoint 1.2 What operators did you use?
// Answer: I used the addition(+), subtraction(-), multiplication(*), and division(/).
// Your code here
{
    var num1 = 5;
    var num2 = 5;
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
}

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
{
    console.log("World" + " Problem")
}

// Checkpoint 1.3 What operators did you use?
// Answer: I used the concatenation operator which combines strings into a single string

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
{
    var isUsersLoggedIn = true;
    var isUsersLoggedOut = false;
    console.log(isUsersLoggedIn && isUsersLoggedOut)
    console.log(isUsersLoggedIn || isUsersLoggedOut)
}

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND (&&) and Logical OR (||).


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
{
    const trees = ["redwood", "bay", "cedar", "oak", "maple"];
    console.log("0" in trees)
    console.log("5" in trees)
}

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: the expression [] == false evaluates to true. The explanation to this weired result is it happens by the process of type coercion that occurs in JavaScript when using the loose equality operator (==).
// Your code here
{
    let emptyArray = [];
    let booleanValue = false;

    let result = emptyArray == booleanValue;

    console.log(result);
}