// VARIABLES - How to Create Labelled storage in Javascript

//  const --- locked cannot be reassigned
const firstName = "John";
const age = 24;
const isStudent = true;

// let --- can be changed later
let score = 0;
score = 10;
score = score + 5;

console.log(firstName);
console.log(age);
console.log(isStudent);
console.log(score);

// THE 7 JAVASCRIPT DATA TYPES

// 1. String - text always in quotes
const name = "Bella Cucina";
const message = "welcome back!";
const template = `Hello ${name}, ${message}`;

// 2. NUMBER -- integers AND decimals (no seperation in Js)
const year = 2026;
const price = 29.99;
const temperature = -5;

// 3. BOOLEAN - true or false
const isLoggedIn = false;
// console.log(isLoggedIn); 
const hasPermission = false;

// 4. UNDEFINED - variable has been declared but never given a value
let userInput;
console.log(userInput); // undefined

// 5. NULL - intentionally empty (you put nothing there on purpose)
const selectedProduct = null; //user hasn't selected anything yet

// 6. ARRAY - ordered list of multiple values
const skills = ["HTML", "CSS", "JavaScript", "React"];

// 7. OBJECT - labelled collection of related data
const user = {
  name: "Alice",
  age: 24,
  isStudent: true,
};

const greet = function() {}