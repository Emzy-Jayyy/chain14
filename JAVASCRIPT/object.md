### Lesson 6: Objects in JavaScript

## 1. The Problem Objects Solve

# Let's imagine we're building a school management system.

# We have a student called Emzy.

# We might store their information like this:

let studentName = "Emzy";
let studentAge = 20;
let studentGrade = "A";
let studentIsActive = true;

# This works.
# But look at what we've done.

# We have four separate variables:

studentName
studentAge
studentGrade
studentIsActive

# And they all describe the same thing:

**Emzy, the student.**

# Imagine we have 1,000 students.

# We would end up with thousands of unrelated variables.

# That's messy.

# We need a way to say:

# "Put all the information belonging to this student together."

# That's what an object allows us to do.


<!---------------------------  -------------------->
## 2. What Exactly Is an Object?

# An object is a data structure that allows us to store related information together using key-value pairs.

# Example:

let student = {
    name: "Emzy",
    age: 20,
    grade: "A",
    isActive: true
};

# Look carefully.

# We have:

student
   ↓
┌─────────────────────────────┐
│ name: "Emzy"                │
│ age: 20                     │
│ grade: "A"                  │
│ isActive: true              │
└─────────────────────────────┘

# Everything describing the student is now grouped together.


<!----------------------------------  -------------------->
## 3. The Real-World Analogy: Student Profile

# Imagine your school has a physical student file.

# On the file you have:

# STUDENT PROFILE

Name:       Emzy
Age:        20
Grade:      A
Active:     Yes

# The student file is the object.

# The individual pieces of information are properties.

# In JavaScript:

let student = {
    name: "Emzy",
    age: 20,
    grade: "A",
    isActive: true
};

# So:

Object
  │
  ├── name
  ├── age
  ├── grade
  └── isActive

<!-----------------------------  ----------------------->
## 4. What Is a Key?

# Look at:

let student = {
    name: "Emzy",
    age: 20,
    grade: "A"
};

# These:

name
age
grade

# are called keys.

# You may also hear:

# property names

# So:

name  → key
age   → key
grade → key

<!----------------------------------  ------------------>
## 5. What Is a Value?

# The values are:

"Emzy"
20
"A"

# So:

name: "Emzy"

# means:

key       value
 ↓          ↓
name  →  "Emzy"

# And:

age: 20

# means:

key    value
 ↓       ↓
age  →  20

## This is called a key-value pair.


<!------------------------------  --------------------->
## 6. Object Syntax

# The basic structure is:

let objectName = {
    key: value,
    key: value,
    key: value
};

# For example:

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024
};

# Think:

        car
         ↓
┌─────────────────┐
│ brand → Toyota  │
│ model → Camry   │
│ year  → 2024    │
└─────────────────┘

<!------------------------------------  ---------------->
## 7. Accessing Object Properties

# Now suppose:

let student = {
    name: "Emzy",
    age: 20,
    grade: "A"
};

# How do we get the name?

# We use dot notation:

console.log(student.name);

# Output:

Emzy

# For age:

console.log(student.age);

# Output:

20

# For grade:

console.log(student.grade);

# Output:

A

<!----------------------------  ---------------------->
## 8. Understanding Dot Notation

# When you write:

student.name

# read it as:

# "Go inside the student object and give me the name property."

# Visualize it:

student
   ↓
┌────────────────┐
│ name: "Emzy" ←─┼── student.name
│ age: 20        │
│ grade: "A"     │
└────────────────┘

# This is similar to arrays.

# With an array:

students[0]

# we use an index.

# With an object:

student.name

# we use a key/property name.


<!-----------------------  ------------------->
## 9. Array vs Object

# This distinction is extremely important.

# An array is generally used when we have a collection/list.

let fruits = ["Apple", "Banana", "Orange"];

# Think:

# "I have a list of fruits."

# An object represents a thing/entity and its characteristics.

let student = {
    name: "Emzy",
    age: 20,
    grade: "A"
};

# Think:

# "I have a student, and these are the student's details."

# So:

ARRAY
↓
Collection of items

["Apple", "Banana", "Orange"]


OBJECT
↓
Description of one thing

{
    name: "Emzy",
    age: 20,
    grade: "A"
}

<!-------------------------------------  -------------->
## 10. Changing Object Properties

# Objects are mutable.

# Suppose:

let student = {
    name: "Emzy",
    age: 20
};

# We can change the age:

student.age = 21;

# Now:

console.log(student.age);

# outputs:

21

# We basically said:

# "Open the student's file and update the age."

<!----------------------------------  ---------------->
## 11. Adding a New Property

# This is interesting.

Suppose:

let student = {
    name: "Emzy",
    age: 20
};

# We later discover that we need to store the student's course.

# We can simply do:

student.course = "Computer Science";

# Now the object is:

{
    name: "Emzy",
    age: 20,
    course: "Computer Science"
}

# We didn't have to recreate the entire object.

<!---------------------------  --------------------->
## 12. Removing a Property

# We can also remove a property using:

## delete

# Example:

let student = {
    name: "Emzy",
    age: 20,
    course: "Computer Science"
};

delete student.age;

# Now:

console.log(student);

# would give an object without age.

# In real applications, however, we don't casually delete data without understanding the consequences.


<!---------------------------  ------------------------>
## 13. Objects Can Store Different Data Types

# Remember that JavaScript variables can hold different types?

# Objects can contain them too.

let user = {
    name: "Emzy",
    age: 20,
    isLoggedIn: true,
    score: 95,
    email: "emzy@example.com"
};

# We have:

name        → string
age         → number
isLoggedIn  → boolean
score       → number
email       → string

<!----------------------------------  ----------------->
## 14. Objects Can Contain Arrays

# Here's where things become more interesting.

let student = {
    name: "Emzy",
    age: 20,
    subjects: ["Math", "Physics", "Chemistry"]
};

# Now:

student.subjects

# gives:

["Math", "Physics", "Chemistry"]

# And:

student.subjects[0]

# gives:

Math

# So we can have:

Object
  │
  ├── name
  ├── age
  └── subjects
          ↓
       Array
       ├── Math
       ├── Physics
       └── Chemistry

## This is extremely common in real applications.

<!-----------------------  ------------------------>
## 15. Arrays Can Contain Objects

# And we can reverse it.

# Suppose we have multiple students.

# Instead of:

let student1 = ...
let student2 = ...
let student3 = ...

# we can have:

let students = [
    {
        name: "Emzy",
        age: 20
    },
    {
        name: "John",
        age: 21
    },
    {
        name: "Mary",
        age: 19
    }
];

# Now we have:

students
   ↓
   ARRAY
    │
    ├── OBJECT
    │    ├── name: Emzy
    │    └── age: 20
    │
    ├── OBJECT
    │    ├── name: John
    │    └── age: 21
    │
    └── OBJECT
         ├── name: Mary
         └── age: 19

## This structure is everywhere in modern JavaScript.

## You'll see it when working with:

## APIs
## databases
## JSON
## React
## Next.js
## Node.js
## NestJS

<!-------------------------  --------------------->
## 16. Accessing Objects Inside Arrays

# Let's say:

let students = [
    {
        name: "Emzy",
        age: 20
    },
    {
        name: "John",
        age: 21
    }
];

# To get Emzy's name:

console.log(students[0].name);

# Think about the steps:

students
   ↓
[0]
   ↓
first student object
   ↓
.name
   ↓
"Emzy"

# So:

students[0].name

means:

## "Go into the students array, get the first student, then get that student's name."

# This syntax may initially look strange, but it's just following the data structure.

<!------------------------------  -------------------->
## 17. Bracket Notation

## There is another way to access object properties.

# Instead of:

student.name

# we can write:

student["name"]

# Both give:

Emzy

# So:

student.name

# and:

student["name"]

# are generally equivalent for ordinary property access.


<!----------------------------------------  -------------->
## 18. Why Do We Need Bracket Notation?

# It becomes particularly useful when the property name is stored inside a variable.

# Example:

let property = "name";

console.log(student[property]);

# JavaScript looks at:

property

# and sees:

"name"

# So it effectively accesses:

student["name"]

# This is something dot notation cannot do in the same way:

student.property

# would look for a property literally called "property".

<!---------------------------  ----------------------->
## 19. Objects + Functions

# Now we're approaching something very important.

# Objects can contain functions.

# For example:

let student = {
    name: "Emzy",
    age: 20,

    greet: function () {
        console.log("Hello!");
    }
};

# Now:

student.greet();

# runs the function.

# A function stored inside an object is commonly called a method.

# So:

PROPERTY
↓
Data

METHOD
↓
Behavior/function

# This gives us a powerful mental model:

# An object can contain both what something HAS and what something CAN DO.

# For example:

let car = {
    brand: "Toyota",
    speed: 0,

    drive: function () {
        console.log("The car is moving!");
    }
};

# The car has:

brand
speed

# The car can do:

drive()

# That's the foundation of object-oriented thinking.

<!-----------------------------  ------------------>
## 20. Modern Method Syntax

# Instead of:

let student = {
    greet: function () {
        console.log("Hello!");
    }
};

# we can write:

let student = {
    greet() {
        console.log("Hello!");
    }
};

# Both represent a method.

# For beginners, I'd teach the second form after they understand the first conceptually.

<!------------------------  ----------------------->
## 21. Objects + this

# Now we're going to introduce a concept that students often find confusing.

# Suppose:

let student = {
    name: "Emzy",

    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

# Then:

student.greet();

# Output:

Hello, my name is Emzy

# What is:

this.name

?

# Inside this method:

greet() {
    console.log("Hello, my name is " + this.name);
}

# this refers to the object that the method is operating on in this call.

# So:

this.name

# means:

# "Get the name belonging to this object."

For now, give students this mental model:

this
 ↓
"this particular object"

<!---------------------  ---------------------->
# 22. Objects + Loops

# Remember our loops?

# We can loop through an array of objects.

let students = [
    { name: "Emzy", age: 20 },
    { name: "John", age: 21 },
    { name: "Mary", age: 19 }
];

for (let student of students) {
    console.log(student.name);
}

# Output:

Emzy
John
Mary

# Look at how naturally everything is connecting now:

ARRAY
 ↓
multiple STUDENT OBJECTS
 ↓
LOOP
 ↓
each STUDENT
 ↓
access NAME property

<!----------------  --------------------------->
## 23. Objects + Conditionals

# We can also make decisions based on object properties.

let student = {
    name: "Emzy",
    score: 85
};

if (student.score >= 50) {
    console.log(student.name + " passed.");
} else {
    console.log(student.name + " failed.");
}

# Output:

Emzy passed.

# Again:

OBJECT
 ↓
student.score
 ↓
OPERATOR
 ↓
>= 50
 ↓
CONDITIONAL
 ↓
decision

<!--------------------------  ------------------->


# This is a much more realistic programming pattern.

<!--------------------------  -------------------------->
##  The Big Mental Model

## Array

# "I have multiple items."

let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

## Object

# "I have one thing and information about that thing."

let student = {
    name: "Emzy",
    age: 20,
    score: 85
};

## Array of Objects

# "I have multiple things, and each thing has information about itself."

let students = [
    { name: "Emzy", score: 85 },
    { name: "John", score: 42 },
    { name: "Mary", score: 70 }
];

# This last structure is extremely important.

# Because when you start consuming APIs, you will constantly encounter data shaped like:

[
    { ... },
    { ... },
    { ... }
]

## 🔥 The Data Structure Hierarchy


VARIABLE
   ↓
one piece of information

ARRAY
   ↓
many pieces of information

OBJECT
   ↓
many related pieces of information about ONE thing

ARRAY OF OBJECTS
   ↓
many things, each with their own information

For example:

                    SCHOOL SYSTEM
                         │
                         ↓
                     students
                         │
                         ↓
                       ARRAY
                         │
             ┌───────────┼───────────┐
             ↓           ↓           ↓
           OBJECT      OBJECT      OBJECT
             ↓           ↓           ↓
          Emzy         John        Mary
             │           │           │
        ┌────┼────┐  ┌───┼────┐  ┌───┼────┐
        ↓    ↓    ↓  ↓   ↓    ↓  ↓   ↓    ↓
      name age score name age score ...

This is the mental model I want them to leave the class with.

