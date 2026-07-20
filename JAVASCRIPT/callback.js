// Can a function be stored inside a variable?
const greet = function () {
    console.log("Hello");
};


// In JavaScript, functions are values.
const age = 25;

const name = "John";

const isStudent = true;

const greet = function () {
    console.log("Hello");
};

/* 
 If I can store a function inside a variable...
 Can I move it somewhere else?
 Of course.
*/

function greet() {
    console.log("Hello");
}

greet();

const sayHello = greet;
sayHello();

// WHAT IS A CALLBACK FUNCTION?
/*
 A callback function is a function that is passed into another function
 as an argument so that it can be executed later.
*/

/*
 A function that waits until another function tells it to run.

 Let Build one.
*/

function greet(anotherFunction) {
    console.log("Good morning");

    anotherFunction();
}

function sayName() {
    console.log("My name is David");
}

greet(sayName);


// CODING EXERCISE
function calculate(a, b, operation) {
    operation(a, b);
}

function add(x, y) {
    console.log(x + y);
}

calculate(10, 5, add);