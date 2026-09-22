### Lesson 7 — JavaScript Array Methods

## 1. Why Do Array Methods Exist?

# We've already learned how to loop through an array.

# For example:

const numbers = [10, 20, 30, 40];

for (let number of numbers) {
console.log(number);
}

# This works perfectly.

# But programmers noticed something:

## "We're constantly writing loops to perform common operations on arrays."

So for instance if you......

### Want to do something to every item?

forEach()

### Want to transform every item into something new?

map()

### Want only certain items?

filter()

### Want to find one particular item?

find()

### Want to combine everything into one result?

reduce()

# So array methods are basically pre-built tools for common array operations.

<!----------------------  --------------------------->

## 2. The Big Mental Model

## This is the most important part of today's lesson.

## Imagine we have:

const numbers = [1, 2, 3, 4, 5];

# Now ask five different questions.

## Question 1

# "Do something with every number."

forEach()

## Question 2

# "Create a new array where every number has been transformed."

map()

## Question 3

# "Give me only the numbers that satisfy a condition."

filter()

## Question 4

# "Give me the first number that satisfies a condition."

find()

## Question 5

# "Combine all the numbers into one final result."

reduce()

So:

                 ARRAY
                   │
       ┌───────────┼────────────┐
       ↓           ↓            ↓

DO SOMETHING TRANSFORM SELECT
│ │ │
forEach() map() filter()
│
↓
find()
│
↓
ONE RESULT
│
reduce()

# Now let's learn each one properly.

<!------------------------  ----------------------------->

#### Part 1 — forEach()

<!--------  -->

## 3. What Does forEach() Do?

# forEach() allows us to execute a function once for every element in an array.

# Suppose:

const fruits = ["Apple", "Banana", "Orange"];

# Traditional loop:

for (let fruit of fruits) {
console.log(fruit);
}

# With forEach():

fruits.forEach(function (fruit) {
console.log(fruit);
});

# Output:

Apple
Banana
Orange

<!----------------  -->

# 4. Understanding the Function Inside forEach()

# This part:

function (fruit) {
console.log(fruit);
}

# is a function.

# We're giving that function to forEach().

# Remember our function lesson?

# A function is reusable behavior.

# Here we're essentially saying:

# "Hey forEach, here's a function. Run this function once for every item."

# Imagine a teacher with a stack of papers:

Paper 1 → run function
Paper 2 → run function
Paper 3 → run function
Paper 4 → run function

# That's forEach().

<!---------------  -->

## 5. Where Does fruit Come From?

# This is important.

# We didn't manually assign:

fruit = "Apple";

# JavaScript does that for us.

# Given:

const fruits = ["Apple", "Banana", "Orange"];

# JavaScript essentially performs:

# First iteration:

fruit = "Apple"

# Second:

fruit = "Banana"

# Third:

fruit = "Orange"

# So:

fruits.forEach(function (fruit) {
console.log(fruit);
});

# means:

## "For each fruit in the fruits array, give that fruit to my function."

<!------------  -->

## 6. forEach() With Arrow Functions

# Remember arrow functions from our earlier function lesson?

# We can make this shorter:

fruits.forEach((fruit) => {
console.log(fruit);
});

# And if there's only one statement:

fruits.forEach(fruit => console.log(fruit));

# But don't teach the shorthand first.

I'd teach students:

fruits.forEach(function (fruit) {
console.log(fruit);
});

until they understand what is actually happening.

Then introduce:

fruit => console.log(fruit)

as a shorter way of writing the same callback.

<!--------------------  -->

## 7. What Is a Callback?

# This is an important concept.

# A callback function is a function passed into another function to be called later.

Example:

function greet(name) {
console.log("Hello " + name);
}

# We can pass greet somewhere:

fruits.forEach(greet);

Conceptually:

forEach()
↓
takes a function
↓
calls it for each item

# This is why array methods are a perfect place to reinforce the callback function concept.

<!---------  -->

## 8. forEach() Gives Us More Information

# The callback can receive more than just the element.

# We can write:

const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit, index) => {
console.log(index, fruit);
});

# Output:

0 "Apple"
1 "Banana"
2 "Orange"

# The callback can receive:

(element, index, array)

For example:

fruits.forEach((fruit, index, array) => {
console.log(fruit);
});

Usually beginners will mostly need:

(element)

and sometimes:

(element, index)

<!-------------  -->

## 9. When Should We Use forEach()?

# Use forEach() when your goal is:

# "Perform an action for every item."

For example:

students.forEach(student => {
console.log(student.name);
});

# We aren't creating a new array.

# We're simply doing something.

<!-----------------------------------------------  --------------------------------->

### Part 2 — map()

Now things get more interesting.

<!---------  -->

## 10. What Does map() Do?

# map() is used when we want to:

# Transform every item in an array and create a new array containing the transformed values.

# Suppose:

const numbers = [1, 2, 3, 4];

# We want:

2
4
6
8

# We could use a loop:

const doubled = [];

for (let number of numbers) {
doubled.push(number * 2);
}


# But map() gives us a cleaner way:

const doubled = numbers.map(number => {
return number * 2;
});

# Now:

console.log(doubled);

Output:

[2, 4, 6, 8]

<!----------  -->

## 11. The Most Important Difference Between forEach() and map()

**forEach()**

# "Do something for each item."

numbers.forEach(number => {
console.log(number \* 2);
});

# It does not create the transformed array for you.

**map()**

# "Transform every item and give me a new array."

const doubled = numbers.map(number => {
return number \* 2;
});

# Visual:

numbers
[1, 2, 3, 4]
│
│ map()
↓
[2, 4, 6, 8]

<!-----------  -->

## 12. map() Must Return Something

This is a common beginner mistake.

# Correct:

const doubled = numbers.map(number => {
return number \* 2;
});

# Because every callback execution returns a value.

# But:

const doubled = numbers.map(number => {
console.log(number \* 2);
});

# doesn't produce the expected array.

# Why?

# Because console.log() displays a value.

# It doesn't return the transformed value.

Remember our earlier lesson:

console.log() ≠ return

<!------  -->

## 13. map() With Objects

# This is where map() becomes incredibly useful.

Suppose:

const students = [
{ name: "Emzy", score: 85 },
{ name: "John", score: 72 },
{ name: "Mary", score: 90 }
];

# We only want the names.

# We can do:

const names = students.map(student => {
return student.name;
});

# Result:

["Emzy", "John", "Mary"]

# Think:

OBJECT VALUE
│ │
↓ ↓
{ name: "Emzy" } → "Emzy"
{ name: "John" } → "John"
{ name: "Mary" } → "Mary"

# That's transformation.

<!---------  -->

## 14. Another map() Example

# Suppose we have prices:

const prices = [100, 200, 300];

# We want to add 10% tax.

const pricesWithTax = prices.map(price => {
return price * 1.10;
});

# Result:

[110, 220, 330]

# Original array:

prices

remains:

[100, 200, 300]

# and we get a new array:

pricesWithTax

containing:

[110, 220, 330]

<!------------------------------------------------  --------------------------------------->

### Part 3 — filter()

# Now suppose:

const numbers = [10, 15, 20, 25, 30];

# We only want even numbers.

# Traditional loop:

const evenNumbers = [];

for (let number of numbers) {
if (number % 2 === 0) {
evenNumbers.push(number);
}
}

# With filter():

const evenNumbers = numbers.filter(number => {
return number % 2 === 0;
});

# Result:

[10, 20, 30]

<!--------  -->

## 15. What Does filter() Mean?

# Think of a security checkpoint.

# We have:

10
15
20
25
30

# The security guard asks each number:

"Are you even?"

10 → YES → keep
15 → NO → reject
20 → YES → keep
25 → NO → reject
30 → YES → keep

# Final result:

[10, 20, 30]

# That's exactly what filter() does.

<!---------  -->

## 16. filter() Requires a Condition

# The callback should return:

true

or:

false

# If:

true

# the item is kept.

# If:

false

# the item is removed from the result.

# So:

numbers.filter(number => number > 20);

# means:

# "Keep numbers greater than 20."

# Given:

[10, 15, 20, 25, 30]

# we get:

[25, 30]

<!------  -->

## 17. filter() With Objects

# This is extremely common.

const students = [
{ name: "Emzy", score: 85 },
{ name: "John", score: 42 },
{ name: "Mary", score: 70 },
{ name: "David", score: 35 }
];

# Find students who passed:

const passedStudents = students.filter(student => {
return student.score >= 50;
});

# Result:

[
{ name: "Emzy", score: 85 },
{ name: "Mary", score: 70 }
]

# Notice something important:

# filter() returns the original objects, not just the score.

<!--------------------------------------------------  -------------------------------------------->

### Part 4 — find()

# Now let's say we don't want all matching students.

# We want one specific student.

# Suppose:

const students = [
{ name: "Emzy", score: 85 },
{ name: "John", score: 42 },
{ name: "Mary", score: 70 }
];

# Find John:

const student = students.find(student => {
return student.name === "John";
});

Result:

{
name: "John",
score: 42
}

<!-------  -->

## 18. filter() vs find()

# This is critical.

**filter()**

# Returns all matching items.

const students = students.filter(student => student.score >= 50);

# Could return:

[Emzy, Mary]

**find()**

# Returns the first matching item.

const student = students.find(student => student.score >= 50);

# Returns:

Emzy

# Think:

filter()
↓
"Give me EVERYONE who qualifies."

find()
↓
"Give me the FIRST person who qualifies."

<!------  -->

## 19. What If find() Doesn't Find Anything?

# Suppose:

const student = students.find(student => {
return student.name === "Peter";
});

# There is no Peter.

# The result is:

undefined

# This is important because students will eventually need to handle this situation.

# For example:

if (student) {
console.log(student.name);
} else {
console.log("Student not found.");
}

<!------------------------------------------  ------------------------------------------>

### Part 5 — reduce()

# Now we've reached the method students usually find the hardest.

Don't rush this one.

<!--------  -->

## 20. What Problem Does reduce() Solve?

# Suppose:

const numbers = [10, 20, 30, 40];

# We want:

100

# We want to take:

many values

# and turn them into:

one value

# That's what reduce() is designed for.

<!----------  -->

## 21. The Mental Model for reduce()

# Imagine a person walking through a line of numbers carrying a box.

# Start with:

0

# Take 10:

0 + 10 = 10

# Take 20:

10 + 20 = 30

# Take 30:

30 + 30 = 60

# Take 40:

60 + 40 = 100

# Final answer:

100

# That box is called the accumulator.

<!----------  -->

# 22. Basic reduce() Syntax

const total = numbers.reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}, 0);

# There are two major parts:

accumulator
currentValue

# and:

0

# at the end is the initial value.

<!----------  -->

## 23. Understanding the Accumulator

# Let's use:

const numbers = [10, 20, 30];

# and:

const total = numbers.reduce((acc, number) => {
return acc + number;
}, 0);

# Trace it:

Start
acc = 0

First number
number = 10

0 + 10 = 10

New accumulator:

10

Second
10 + 20 = 30

Third
30 + 30 = 60

Final:

60

<!--------------  -->

## 24. Why Is It Called an Accumulator?

# Because it accumulates the result.

# Think of filling a bucket.

Bucket
↓
0

Add 10:

10

Add 20:

30

Add 30:

60

# The bucket keeps accumulating.

<!---------  -->

## 25. reduce() Doesn't Have to Calculate a Sum

# This is important.

reduce() isn't:

# "The method for adding numbers."

# That's just one use.

# It means:

# Take many values and reduce them into one final result.

For example, count students:

const students = [
{ name: "Emzy", passed: true },
{ name: "John", passed: false },
{ name: "Mary", passed: true }
];

const passedCount = students.reduce((count, student) => {
if (student.passed) {
return count + 1;
}

    return count;

}, 0);

Result:

2

# We're reducing:

many students

# into:

one number

<!---------  -->

## 26. reduce() Can Build Objects

# Here's a more advanced example.

Suppose:

const fruits = ["apple", "banana", "apple", "orange", "banana"];

# We want to count each fruit.

We can use reduce():

const counts = fruits.reduce((result, fruit) => {
if (result[fruit]) {
result[fruit]++;
} else {
result[fruit] = 1;
}

    return result;

}, {});

Result:

{
apple: 2,
banana: 2,
orange: 1
}

This demonstrates something important:

# The accumulator doesn't have to be a number.

# It can be:

number
string
array
object

or another structure.

<!-----------------------------------  --------------------------------------------------------->

## 27. The Five Methods Side by Side

# Now let's put everything together.

# Suppose:

const numbers = [1, 2, 3, 4, 5];

**forEach()**

# Do something for every item.

numbers.forEach(number => {
console.log(number);
});

# Returns:

undefined

**map()**

# Transform every item.

const doubled = numbers.map(number => number \* 2);

# Returns:

[2, 4, 6, 8, 10]

**filter()**

# Keep items that satisfy a condition.

const even = numbers.filter(number => number % 2 === 0);

# Returns:

[2, 4]

**find()**

# Find the first item that satisfies a condition.

const result = numbers.find(number => number > 3);

# Returns:

4

**reduce()**

# Combine everything into one result.

const total = numbers.reduce((sum, number) => sum + number, 0);

# Returns:

15

<!-----------------------------------------  ---------------------->

### The Ultimate Cheat Sheet

## Think in questions, not method names.

## I want to... Use

Do something to every item forEach()
Transform every item map()
Keep some items filter()
Find one item find()
Combine everything into one result reduce()

# The biggest distinction is:

forEach()
→ "Do something."

map()
→ "Transform."

filter()
→ "Keep some."

find()
→ "Find one."

reduce()
→ "Combine."

<!------  -->

## 28. The Most Important Comparison: forEach() vs map()

Students will constantly confuse these.

# forEach()

const numbers = [1, 2, 3];

numbers.forEach(number => {
console.log(number \* 2);
});

# We're doing something with each number.

# We're not creating a new array.

# map()

const doubled = numbers.map(number => {
return number \* 2;
});

# We're creating:

[2, 4, 6]

# So ask:

# "Do I need a new transformed array?"

# If yes → map().

# If no, and you just need to perform an action → forEach().

<!-------------  -->

## 29. The Most Important Comparison: filter() vs find()

# Ask:

# "Do I want all matches or just one?"

# All matches:

filter()

# First match:

find()

# Example:

students.filter(student => student.score >= 50);

# Could give:

Emzy
Mary
David

# While:

students.find(student => student.score >= 50);

# could give only:

Emzy

<!-----------------  -->

## 30. A Real-World Example

# Let's imagine we're building an online store.

const products = [
{ name: "Laptop", price: 500000, inStock: true },
{ name: "Phone", price: 300000, inStock: false },
{ name: "Mouse", price: 15000, inStock: true },
{ name: "Keyboard", price: 30000, inStock: true }
];

# Show every product

products.forEach(product => {
console.log(product.name);
});

# Get product names

const names = products.map(product => product.name);

# Result:

["Laptop", "Phone", "Mouse", "Keyboard"]

# Get products in stock

const available = products.filter(product => product.inStock);

# Find the laptop

const laptop = products.find(product => product.name === "Laptop");

# Calculate total inventory value

const total = products.reduce((sum, product) => {
return sum + product.price;
}, 0);

# This is why these methods matter.

# They're not random JavaScript syntax.

# They're tools for manipulating real application data.

<!-------------  -->

## 31. Method Chaining

Now we're entering a very powerful pattern.

# We can combine methods.

# Suppose:

const students = [
{ name: "Emzy", score: 85 },
{ name: "John", score: 42 },
{ name: "Mary", score: 90 },
{ name: "David", score: 35 }
];

# We want:

# "Give me the names of students who passed."

# We can do:

const passedNames = students
.filter(student => student.score >= 50)
.map(student => student.name);

# Let's visualize it.

# First:

students
↓
filter()
↓
Emzy
Mary

# Then:

Emzy
Mary
↓
map()
↓
["Emzy", "Mary"]

# So:

ARRAY
↓
filter()
↓
smaller ARRAY
↓
map()
↓
transformed ARRAY

# This pattern is extremely common in React, Node.js, frontend applications, and API development.

<!------  -->

## 32. Don't Abuse Chaining

# Students shouldn't see chaining and think:

# "The more methods I chain, the better programmer I am."

No.

# Code should remain understandable.

# This:

const result = students
.filter(student => student.score >= 50)
.map(student => student.name);

# is readable.

# But extremely complicated chains can become difficult to debug.

# The goal is:

# Readable transformation of data.

# Not clever-looking code.
