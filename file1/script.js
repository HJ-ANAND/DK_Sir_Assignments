// SECTION 1: PRIMITIVE DATA TYPES

// Task 1: Write a program that takes a string and prints its length
let str = "JavaScript";
console.log("Task 1 Output:", str.length);



// Task 2: Write a function that checks if a value is a number
function checkNumber(value) {
    return typeof value === "number";
}

console.log("Task 2 Output:");
console.log(checkNumber(25));     // true
console.log(checkNumber("25"));   // false




// Task 3: Convert a string "123" into number 123
let stringValue = "123";
let numberValue = Number(stringValue);

console.log("Task 3 Output:", numberValue);
console.log("Type:", typeof numberValue);




// Task 4: Compare two numbers and print Greater, Smaller, or Equal
function compareNumbers(a, b) {
    if (a > b) {
        console.log("Greater");
    } else if (a < b) {
        console.log("Smaller");
    } else {
        console.log("Equal");
    }
}

console.log("Task 4 Output:");
compareNumbers(10, 5);




// Task 5: Join first name and last name
function joinName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log("Task 5 Output:", joinName("Rahul", "Sharma"));



//SECTION 2:FUNCTIONS

// Task 1: Function expression to add two numbers
const add = function(a, b) {
    return a + b;
};

console.log("Section 2 - Task 1 Output:", add(10, 20));


// ---------------------------------------------


// Task 2: Function and Arrow Function to find square

// Normal Function
function square(num) {
    return num * num;
}

// Arrow Function
const squareArrow = (num) => num * num;

console.log("Section 2 - Task 2 Output:");
console.log("Square (Function):", square(5));
console.log("Square (Arrow):", squareArrow(5));




// Task 3: Lambda (Arrow) function to check even or odd
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log("Section 2 - Task 3 Output:", checkEvenOdd(10));




// Task 4: Temperature conversion functions

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("Section 2 - Task 4 Output:");
console.log("30°C to Fahrenheit:", celsiusToFahrenheit(30));
console.log("86°F to Celsius:", fahrenheitToCelsius(86));




// Task 5: Convert function into arrow function

// Original Function
function multiply(a, b) {
    return a * b;
}

// Arrow Function
const multiplyArrow = (a, b) => a * b;

console.log("Section 2 - Task 5 Output:", multiplyArrow(5, 4));