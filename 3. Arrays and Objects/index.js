/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
{
    console.log("First number: " + numbers[0])
    console.log("Fifth number: " + numbers[4])
    console.log("Last number: " + numbers[numbers.length - 1])
}

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
{
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
        max = numbers[i];
        }
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;

    console.log("Minimum: " + min);
    console.log("Maximum: " + max);
    console.log("Average: " + average);
}

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: JavaScript arrays are handled as objects and offer greater flexibility in holding a variety of data types. Python lists are built-in data types and prefer to preserve consistent element types.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let it114lCourse = {
    courseCode: "IT114L",
    courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units: 3,
    numberOfStudents: 42
};
      
console.log(it114lCourse.courseName);

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
it114lCourse.professorName = "Sir Job"
console.log(it114lCourse);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let coursesThisTerm = [
    {
        courseCode: "IT114L",
        courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
        units: 3,
        numberOfStudents: 42,
        professorName: "Sir Job"
    },
    {
        courseCode: "IT114",
        courseName: "WEB SYSTEMS AND TECHNOLOGIES",
        units: 3,
        numberOfStudents: 42,
        professorName: "Sir Job"
    },
];

console.log(coursesThisTerm)

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
console.log(coursesThisTerm.reduce((sum, course) => sum + course.units, 0))

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: I think that the dictionary of Python is the counterpart of JavaScript objects. Because both Python dictionaries and JavaScript objects function as data structures for holding key-value pairs and can handle a variety of data types.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let newArray = [...numbers, 23];
console.log(newArray)


// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units, ...selectedProperties } = it114lCourse;

console.log("Selected Properties:", selectedProperties);

