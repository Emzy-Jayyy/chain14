## Lesson 5: Loops in JavaScript

## An array can contain 5, 50, or 50,000 items—but we need a way to process those items without writing the same code repeatedly.

<!-------------------------------------------  ----------------------------------------->

## 1. The Problem Loops Solve

## Imagine we have:

let students = ["Emzy", "John", "Mary", "David", "Sarah"];

## And our job is:

## Print every student's name.

## Without a loop:

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

## This works.

## But imagine we have:

let students = [
    "Emzy",
    "John",
    "Mary",
    "David",
    "Sarah",
    "Peter",
    "Grace",
    "Daniel",
    "James",
    "Michael"
];

## Now we have 10.

## What if we have 1,000 students?

## We obviously don't want:

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
// ...
// 997 more lines

## This is where loops come in.

<!----------------------------------------------  ----------------------------------->
## 2. What Exactly Is a Loop?

## A loop allows us to repeat a block of code multiple times based on a condition or collection.

## In simple English:

## "Keep doing this until I tell you to stop."

## Real-world analogy: a teacher marking scripts

## Imagine I give you 100 exam papers.

## You don't say:

## "I'll mark paper 1... now I need to completely rethink what I'm doing before marking paper 2."

## Instead, your process is:

            Pick paper
                ↓
            Mark paper
                ↓
            Record score
                ↓
            Is there another paper?
                ↓
            YES → Pick next paper
                ↓
            Mark it
                ↓
                ...
                ↓
            NO → Stop

## That's essentially a loop.

<!--------------------------------------------  -------------------------------------->

## 3. The First Loop: for

## The most important loop beginners should learn first is the for loop.

## Basic syntax:

for (initialization; condition; update) {
    // code to repeat
}

## Don't let this syntax scare you.

## There are three pieces:

for (
     initialization;
     condition;
     update
)

## Think of it as:

## Start → Check → Do → Update → Check → Do → Update → ... → Stop

<!----------------------------------------  ------------------------------------------>

## 4. Our First for Loop

## Let's say:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

## Output:

0
1
2
3
4

## Now let's understand every single piece.

<!------------------------------------------------------  -------------------------------------->
## 5. let i = 0

## This is the initialization.

let i = 0;

## We're creating a variable called i.

## Why i?

## It commonly means index or iterator.

## You don't have to use i.

## You could write:

let count = 0;

## But you'll see i everywhere in programming.

## So students should become comfortable with it.

## Analogy

## Imagine you're counting students from the beginning.

## You start at:

0

## So:

let i = 0;

## means:

"Start counting from 0."

<!------------------------------------------------  ------------------------------->
## 6. i < 5

## This is the condition.

i < 5

## JavaScript asks:

"Is i less than 5?"

## If yes:

true

## Run the loop body.

## If no:

false

Stop.

## Remember our conditionals lesson?

## This is the same idea.

## We learned:

if (age >= 18)

## JavaScript asks:

Is this true?

## Loops use the same concept.

<!-------------------------------------------------------  ----------------------------------->
## 7. i++

## This is the update.

i++

## It means:

Increase i by 1.

## Remember our operators lesson?

i++;

## is essentially:

i += 1;

## which is essentially:

i = i + 1;

## So:

0
↓
1
↓
2
↓
3
↓
4
↓
5

<!-----------------------------------------------  ------------------------------------------->
## 8. Let's Trace the Loop

## This is where I want students to slow down.

## Given:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

## JavaScript does this:

## Round 1

## Start:

i = 0

## Check:

0 < 5 → true

## Run:

console.log(i);

## Output:

0

## Then:

i++

## Now:

i = 1

## Round 2

## Check:

1 < 5 → true

## Print:

1

## Increment:

i = 2

## Round 3

2 < 5 → true

## Print:

2

## Then:

i = 3

## Round 4

3 < 5 → true

## Print:

3

## Then:

i = 4

## Round 5

4 < 5 → true

## Print:

4

## Then:

i = 5

## Final check

5 < 5 → false

## Therefore JavaScript stops.

<!------------------------------------------------  --------------------------------->

## 9. The Loop Mental Model

## Memorize this flow:

             START
               ↓
        let i = 0
               ↓
        Is i < 5?
          ↙       ↘
       YES         NO
        ↓           ↓
   Run the code    STOP
        ↓
      i++
        ↓
   Go back to
   the condition

## That's the heart of a for loop.

## 10. Why Loops and Arrays Are Best Friends

## Now let's connect our previous lesson.

## We have:

let students = ["Emzy", "John", "Mary", "David"];

## Remember:

Index       Student

  0         Emzy
  1         John
  2         Mary
  3         David

## We can use a loop:

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

## Output:

Emzy
John
Mary
David

## Now this is powerful.

## Let's understand it.

<!-----------------------------------------------  ------------------------------------->

## 11. Understanding students[i]

## This part is extremely important:

students[i]

## Remember:

students[0]

## means:

Get the item at index 0.

## And:

students[1]

## means:

Get the item at index 1.

## But i changes.

## So:

students[i]

## means:

## "Give me the student at whatever index i currently represents."

## Watch:

i = 0
students[0]
   ↓
"Emzy"

i = 1
students[1]
   ↓
"John"

i = 2
students[2]
   ↓
"Mary"

i = 3
students[3]
   ↓
"David"

## That's how the loop walks through the array.

<!------------------------------------------------  ------------------------------------------>

## 12. Why Do We Use students.length?

## We could write:

for (let i = 0; i < 4; i++) {

## because there are four students.

## But that's not good programming.

## What if we add another student?

let students = ["Emzy", "John", "Mary", "David", "Sarah"];

## Our loop still says:

i < 4

## So Sarah gets ignored.

## Instead:

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

## Now JavaScript automatically knows how many students there are.

## If there are:

4 students → length = 4
10 students → length = 10
1000 students → length = 1000

## The loop adapts.

## This is one of the first moments where students begin thinking like programmers rather than simply writing syntax.

<!-----------------------------------------------  -------------------------------------------->

## 13. Another Example: Numbers

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

## Output:

10
20
30
40

<!--------------------------------------------  ------------------------------->

## 14. Loops + Conditionals

## Now we're combining three lessons:

Arrays
Loops
Conditionals

## Suppose:

let scores = [45, 72, 90, 33, 81];

## We want to print whether each student passed.

## Remember:

50 or above → Passed
below 50 → Failed

## We can write:

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

## Output:

Failed
Passed
Passed
Failed
Passed

## Look at what's happening:

ARRAY
  ↓
LOOP
  ↓
Get each score
  ↓
CONDITIONAL
  ↓
Make decision

## That's programming.

<!--------------------------------------------------------  ----------------------------------->

## 15. Loops + Operators

## We can also use operators.

## Suppose:

let numbers = [1, 2, 3, 4, 5, 6];

## We want to print only even numbers.

## Remember our % operator?

number % 2

## If the result is 0, it's even.

## So:

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

## Output:

2
4
6

## Now look at what your students have built:

             ARRAY
               ↓
        [1,2,3,4,5,6]
               ↓
             LOOP
               ↓
       Check every number
               ↓
          CONDITIONAL
               ↓
       Is number % 2 === 0?
            ↙       ↘
          YES        NO
           ↓          ↓
         print       skip

This is a major milestone.

<!----------------------------------------------  ---------------------------------------->

## 16. while Loops

## There is another important loop:

while

## A while loop basically says:

## "While this condition is true, keep doing this."

## Syntax:

while (condition) {
    // code
}

## Example:

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

Output:

0
1
2
3
4

## Notice the similarity to for.

<!-----------------------------------------------  ---------------------------------------->

## 17. for vs while

## Think of them like this.

**for**

## Use when you generally know the structure of the repetition.

Example:

"Go through this array."

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

**while**

## Useful when repetition depends more directly on a condition.

Example:

## "Keep trying while the password is incorrect."

Conceptually:

while (passwordIsIncorrect) {
    // try again
}

## The key idea:

FOR
↓
Repeat with a controlled counter/iteration

WHILE
↓
Repeat while a condition remains true

<!-----------------------------------------------------------  ----------------------------------->
## 18. The Most Dangerous Beginner Mistake: Infinite Loops

## Consider:

let count = 0;

while (count < 5) {
    console.log(count);
}

## What's wrong?

## We never change count.

## It remains:

0

## So JavaScript keeps asking:

0 < 5?
YES

0 < 5?
YES

0 < 5?
YES

0 < 5?
YES
...

## Forever.

## That's an infinite loop.

## We need:

count++;

## So:

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

## Now it eventually becomes:

5 < 5 → false

## and stops.

<!----------------------------------------------  --------------------------->

## 19. break

## Sometimes we want to stop a loop early.

## We can use:

break;

## Example:

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

## Output:

0
1
2
3
4

## When:

i === 5

## becomes true:

break;

## says:

## "Get out of this loop immediately."

## Analogy

## Imagine you're searching through a box for your phone.

## You inspect:

Item 1
Item 2
Item 3
Item 4
Item 5 → PHONE FOUND!

## You don't continue searching.

## You stop.

## That's break.

<!-------------------------------------------------  ----------------------------------------->

## 20. continue

## There's also:

continue;

## This means:

## "Skip this iteration and move to the next one."

## Example:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}

## Output:

0
1
3
4

## When i is 2, JavaScript skips that round.

## It doesn't stop the entire loop.

## So:

break
↓
STOP THE WHOLE LOOP

continue
↓
SKIP THIS ROUND

<!-----------------------------------------------  ------------------------------------------>

## 21. A Very Important Distinction

## Students often confuse:

break;

## and:

continue;

## Think about a classroom.

**break**

## Teacher says:

## "Class is over. Everybody leave."

## The entire process stops.

**continue**

## Teacher says:

## "Skip question 3 and continue with question 4."

## The process continues.

<!---------------------------------------------  -------------------------------------->

## 22. Modern JavaScript: for...of

## Once students understand normal for loops, introduce:

for...of

## This is extremely useful for arrays.

## Instead of:

let students = ["Emzy", "John", "Mary"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

## we can write:

for (let student of students) {
    console.log(student);
}

## Output:

Emzy
John
Mary

## This reads almost like English:

## "For each student of students, print the student."

## Mental model

**Normal for:**

## "Give me the index so I can access the item."

students[i]

**for...of:**

## "Just give me the item."

**student**

## For beginners, for...of is often easier once they've understood the traditional for loop.

<!-----------------------------------------------------------  -------------------------------->

## 23. Functions + Arrays + Loops + Conditionals

## Now let's bring everything we've learned together.

## Suppose we want a function that counts how many students passed.

function countPassedStudents(scores) {
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 50) {
            count++;
        }
    }

    return count;
}

## Then:

let scores = [45, 72, 90, 33, 81];

let result = countPassedStudents(scores);

console.log(result);

Output:

3

## Let's break down the architecture:

countPassedStudents(scores)
          ↓
       FUNCTION
          ↓
   receives an ARRAY
          ↓
        LOOP
          ↓
 checks every SCORE
          ↓
     CONDITIONAL
          ↓
 score >= 50?
      ↓       ↓
    YES       NO
     ↓         ↓
 count++      skip
          ↓
       RETURN
          ↓
          3

## This is exactly why we're learning these concepts in sequence.

## 🧠 The Big Picture So Far

## Your students should now be able to see JavaScript as a set of building blocks:

VARIABLES
   ↓
Store information

OPERATORS
   ↓
Calculate / compare / combine

CONDITIONALS
   ↓
Make decisions

FUNCTIONS
   ↓
Package reusable behavior

ARRAYS
   ↓
Store multiple values

LOOPS
   ↓
Repeat work over those values

And when we combine them:

                 JAVASCRIPT PROGRAM
                        │
             ┌──────────┴──────────┐
             ↓                     ↓
          DATA                  LOGIC
             │                     │
      ┌──────┴──────┐       ┌──────┴──────┐
      ↓             ↓       ↓             ↓
  Variables      Arrays   Operators   Conditionals
                                      │
                                      ↓
                                   Loops
                                      │
                                      ↓
                                  Functions

## That's the foundation your students need before moving into more powerful JavaScript concepts.

## 🎯 Hands-On Tasks for This Lesson

Don't let them just watch you code these. Make them type them.

## Task 1 — Count from 1 to 10

## Use a for loop to output:

1
2
3
4
5
6
7
8
9
10

### Task 2 — Even Numbers

# Print all even numbers from 1 to 20.

Expected:

2
4
6
8
10
12
14
16
18
20

## Hint:

number % 2 === 0

### Task 3 — Array Printer

# Given:

let fruits = ["Apple", "Banana", "Orange", "Mango"];

# Use a loop to print every fruit.

### Task 4 — Find Passed Students

# Given:

let scores = [45, 72, 90, 33, 81, 55, 40];

# Use a loop and conditional to print only scores that are >= 50.

### Task 5 — Sum an Array

# Given:

let numbers = [10, 20, 30, 40, 50];

# Calculate the total.

# Expected:

150

# Hint:

# Start with:

let total = 0;

# Then add each number to total.

### Task 6 — Find the Largest Number

# Given:

let numbers = [12, 45, 7, 89, 23];

# Find the largest number.

# Expected:

89

# This one requires them to think, not just copy syntax.

### 🔥 Final Challenge — Student Result Processor

# Create:

function processScores(scores) {
    // your code
}

# Given:

let scores = [45, 72, 90, 33, 81, 55, 40];

## Your function should:

# Loop through all scores.
# Count how many students passed.
# Count how many failed.
# Calculate the total score.
# Calculate the average score.
# Return the result.

## The output should conceptually look like:

Passed: 4
Failed: 3
Total: 416
Average: 59.43

## This challenge combines arrays + loops + conditionals + operators + functions + return values.

## And that's exactly the point.

## We don't learn JavaScript concepts so students can memorize syntax. We learn them so they can combine the concepts to solve problems.

Once they're comfortable with this lesson, the next major step is Objects—where they'll move from storing lists of values to representing real-world entities such as a student, product, user, or car.