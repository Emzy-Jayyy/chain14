## 👨‍🏫 LESSON 2: CONDITIONALS IN JAVASCRIPT

## 🎯 What are Conditionals?

Let's start with everyday life.

Every day, we make decisions based on conditions.

For example:

## If it is raining, then take an umbrella.

Or:

## If I'm hungry, then I'll eat.

Or:

## If my exam score is 70 or above, then I passed.

Notice something about all of these.

## There's a condition and there's an action.

CONDITION
    ↓
Is it raining?
    ↓
 YES ─────→ Take umbrella
    ↓
 NO ──────→ Don't take umbrella

## That's exactly what a conditional statement allows us to do in programming.

## Definition

## A conditional statement allows JavaScript to make decisions and execute different pieces of code depending on whether a condition is true or false.

## 🧠 Why Do We Need Conditionals?

Imagine we couldn't use conditionals.

## Suppose we're building a login system.

## We need JavaScript to decide:

"Is the password correct?"

## If yes:

Welcome!

## If no:

Incorrect password.

## Without conditionals, JavaScript wouldn't have a way to make that decision.

## So conditionals give our programs something very important:

## Decision-making ability.

## You can think of a program without conditionals as a person who can perform instructions but can't make decisions.

## Conditionals give the program a brain for choosing between paths.


<!---- 1️⃣ The if Statement ----->

## The simplest conditional is if.

## The word if literally means:

## "Only do this if this condition is true."

## The basic structure is:

if (condition) {
    // code to execute
}

## Let's look at a real example:

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}

## Let's translate this into English:

## If age is greater than or equal to 18, print "You are an adult."

## 🚪 Analogy: A Security Guard

## Imagine a nightclub with a security guard at the entrance.

## The rule is:

## You must be 18 or older to enter.

The guard checks your age.

             🚪
        ┌───────────┐
        │  SECURITY │
        │   GUARD   │
        └─────┬─────┘
              │
        Is age >= 18?
          /       \
       YES         NO
        ↓           ↓
     Enter       Don't enter

## The if statement is like that security guard.

if (age >= 18) {
    console.log("Enter.");
}

## The condition:

age >= 18

## is the question the guard asks.

## If the answer is true, JavaScript enters the {} block.

## If the answer is false, JavaScript skips it.

## 🧠 This Is Important

## An if statement needs a condition that can be evaluated as true or false.

## For example:

if (age >= 18) {
}

## The comparison produces a Boolean.

true

or:

false

## Think of if as asking:

## "Should I enter this block of code?"

## If the answer is yes → enter.

## If the answer is no → skip.

<!-- 2️⃣ The else Statement -->

## Now let's say the person isn't 18.

## Our previous program does nothing.

let age = 15;

if (age >= 18) {
    console.log("You are an adult.");
}

## Because:

15 >= 18

## is:

false

## JavaScript simply skips the block.

## But what if we want to tell the person what happens when the condition is false?

## That's where else comes in.

let age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

Now we have two possible paths.

             age >= 18?
              /      \
           TRUE      FALSE
            ↓          ↓
        Adult      Not adult

## And here's an important rule:

## Only one of the two paths will execute.

<!------ 3️⃣ else if ------>

## Now here's the problem.

## What if there are more than two possibilities?

## Imagine we're grading students.

## We don't just have:

Pass
Fail

## We have:

A
B
C
D
F

## We can use else if.

let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

## 👨‍🏫 Analogy: Multiple Doors

## Imagine you're in a building with several doors.

                 Start
                   ↓
             Is score >= 90?
              /          \
            YES           NO
             ↓             ↓
             A       Is score >= 80?
                         /      \
                       YES       NO
                        ↓         ↓
                        B    Is score >= 70?
                                  ...

## JavaScript checks the doors from top to bottom.

## The first condition that is true determines which block executes.

<!-- 4️⃣ Nested Conditionals -->

## You can put one if statement inside another.

## This is called a nested conditional.

For example:

let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("You may enter.");
    }
}

## Think about it like entering a building with two security checkpoints.

## First guard:

Are you 18 or older?

## If yes, you reach the second guard.

## Second guard:

Do you have an ID?

## Only if both checks pass do you enter.

<!-- 5️⃣ Multiple Conditions -->

## Instead of nesting:

if (age >= 18) {
    if (hasID) {
        console.log("Enter");
    }
}

## we can sometimes use the logical && operator:

if (age >= 18 && hasID) {
    console.log("Enter");
}

## Remember:

## && = AND

## So we're saying:

## "Age must be at least 18 AND the person must have an ID."


<!-- 6️⃣ The Ternary Operator -->

## There's another way to write a simple conditional.

## Suppose:

let age = 20;

We could write:

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

## For very simple situations, JavaScript gives us the ternary operator:

age >= 18 ? "Adult" : "Minor";

## Think of it as a tiny if...else.

# The structure is:

 condition ? valueIfTrue : valueIfFalse

## For example:

let message = age >= 18 ? "Adult" : "Minor";

## If the condition is true:

message = "Adult"

## Otherwise:

message = "Minor"