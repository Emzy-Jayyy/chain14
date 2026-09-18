## Lesson 4: Arrays in JavaScript

## we have mostly been working with one value at a time:

let name = "Emzy";
let age = 20;
let score = 85;

## But imagine we have 30 students.

## Are we really going to write:

let student1 = "Emzy";
let student2 = "John";
let student3 = "Mary";
let student4 = "David";
let student5 = "Sarah";
//...

## That's where arrays come in.

<!----------------------------------  ---------------------->
## 1. What Exactly Is an Array?

## An array is a data structure that allows us to store multiple values inside one variable.

## For example:

let students = ["Emzy", "John", "Mary", "David"];

## Instead of having four separate variables:

let student1 = "Emzy";
let student2 = "John";
let student3 = "Mary";
let student4 = "David";

## we have:

let students = ["Emzy", "John", "Mary", "David"];

<!---------------------------------------------  ---------------->
## 2. Arrays Start Counting From 0

## This is probably the first thing that confuses beginners.

## We humans normally count:

1
2
3
4

## JavaScript arrays count:

0
1
2
3

## So:

let students = ["Emzy", "John", "Mary", "David"];

## means:

Index       Value

  0         "Emzy"
  1         "John"
  2         "Mary"
  3         "David"

## Why?

## Because JavaScript considers the first element to be at position 0.


<!--------------------------------------  -->
## 3. Accessing an Array Element

## Suppose we have:

let students = ["Emzy", "John", "Mary", "David"];

## If we want "Emzy":

console.log(students[0]);

## Output:

Emzy

## If we want "John":

console.log(students[1]);

## Output:

John

## If we want "Mary":

console.log(students[2]);

## Output:

Mary

## And:

## console.log(students[3]);

## gives:

David
Mental model

## Think:

Array name + index = specific item

students[2]

## means:

"Go to the students array and open locker number 2."

<!------------------------------------------------  -->
## 4. Creating an Array

## There are two common ways.

Array literal — the one students should learn first
let fruits = ["Apple", "Banana", "Orange"];

## The [] tells JavaScript:

"I'm creating an array."

## You can also have numbers:

let scores = [85, 90, 72, 60];

## Or booleans:

let answers = [true, false, true];

## And JavaScript arrays can technically contain different types:

let data = ["Emzy", 20, true];

## But tell your students:

## Just because JavaScript allows mixed types doesn't mean you should randomly mix unrelated data.

## In real applications, arrays usually contain related things.

For example:

let scores = [85, 90, 72, 60];

makes sense.

<!---------------------------------------------------  -->
## 5. Changing an Array Element

## Arrays are mutable, meaning their elements can be changed.

Suppose:

let students = ["Emzy", "John", "Mary"];

## Maybe John changed his name to Jonathan.

## We can do:

students[1] = "Jonathan";

## Now:

console.log(students);

## gives:

["Emzy", "Jonathan", "Mary"]
Analogy

## Remember our lockers?

## You don't need to build a new row of lockers just because the name inside one locker changed.

## You simply open locker 1 and replace what's inside.

<!----------------------------------------------  -->
## 6. Finding the Length of an Array

## JavaScript gives arrays a property called:

## .length

## Example:

let students = ["Emzy", "John", "Mary", "David"];

console.log(students.length);

Output:

4

## Because there are four students.

## Very important relationship

## If an array has:

students.length

of 4, the indexes are:

0
1
2
3

## Therefore:

Last index = length - 1

## So:

students.length - 1

## gives:

3

## This becomes extremely important when we start using loops

<!----------------------------------------------  -->
## 7. Adding Items to an Array

## One of the most useful array methods is:

.push()

## Example:

let fruits = ["Apple", "Banana"];

fruits.push("Orange");

## Now:

console.log(fruits);

## gives:

["Apple", "Banana", "Orange"]

## Analogy

## Imagine a queue:

Apple → Banana

## Someone joins the back:

Apple → Banana → Orange

## .push() adds something to the end.

<!------------------------  -->
## 8. Removing the Last Item

## We have:

.pop()

## Example:

let fruits = ["Apple", "Banana", "Orange"];

## fruits.pop();

## Now:

console.log(fruits);

## gives:

["Apple", "Banana"]

## .pop() removes the last element.

Think of it like:

Apple → Banana → Orange
                  ↑
               removed

<!--------------------------------------------------  -->
## 9. Adding to the Beginning

## We have:

.unshift()

## Example:

let fruits = ["Banana", "Orange"];

fruits.unshift("Apple");

## Now:

console.log(fruits);

## gives:

["Apple", "Banana", "Orange"]

## So:

## push()     → add to the end
## pop()      → remove from the end
## unshift()  → add to the beginning

## And there is:

shift()

## which removes the first element.

<!-----------------------------------------------  -->
## 10. The Four Basic Methods

I want your students to memorize this table:

##  Method	    What it does
    push()	    Adds to the end
    pop()	    Removes from the end
    unshift()	Adds to the beginning
    shift()   	Removes from the beginning

## Think of an array as a queue:

BEGINNING                         END
   ↓                               ↓
["Emzy", "John", "Mary", "David"]
   ↑                               ↑
 shift()                         pop()
 unshift()                       push()

<!--------------------------------------------  ------------------>
## 11. Arrays + Conditionals

## Now things get interesting.

Remember our previous lessons?

We learned:

Operators
Conditionals
Functions

Now we're adding:

Arrays

These concepts don't live separately.

We can combine them.

Example:

let scores = [45, 72, 90, 33];

if (scores[0] >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

Here:

scores[0]

gives:

45

Then:

45 >= 50

becomes:

false

Therefore:

Failed

This is where students start seeing how the pieces fit together.

<!--------------------------------------------  ------------->
12. Arrays + Functions

We can also pass arrays into functions.

function showFirstStudent(students) {
    console.log(students[0]);
}

let students = ["Emzy", "John", "Mary"];

showFirstStudent(students);

Output:

Emzy

## Notice something important.

## The function parameter:

students

## can receive an entire array.

## So parameters aren't limited to strings or numbers.

## They can receive:

strings
numbers
booleans
arrays
objects
etc.

<!---------------------------  -->
13. A Very Important Preview: Loops

Now we've reached the reason arrays become really powerful.

Imagine:

let students = ["Emzy", "John", "Mary", "David", "Sarah"];

What if I say:

Print every student's name.

You could technically do:

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

But what if there are 10,000 students?

😂

We're not doing that.

We need a way to say:

"Go through every item in this array and perform this action."

That's what loops are for.

And that will be our next major lesson.

<!------------------------------------------------  -->
Today's Mental Model

By the end of this lesson, students should understand:

                 ARRAY
                   │
                   ↓
       ┌──────────────────────┐
       │ Stores multiple      │
       │ values in one place  │
       └──────────────────────┘
                   │
                   ↓
       ┌──────────────────────┐
       │       INDEX          │
       │                      │
       │ 0 → first item       │
       │ 1 → second item      │
       │ 2 → third item       │
       └──────────────────────┘
                   │
                   ↓
             ARRAY METHODS
                   │
       ┌───────────┼───────────┐
       ↓           ↓           ↓
     push        pop       unshift/shift
       │           │           │
       ↓           ↓           ↓
      add        remove       beginning

And the bigger JavaScript picture is now becoming:

VARIABLES
    ↓
OPERATORS
    ↓
CONDITIONALS
    ↓
FUNCTIONS
    ↓
ARRAYS
    ↓
LOOPS


