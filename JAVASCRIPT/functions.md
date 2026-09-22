## 👨‍🏫 LESSON 3 — FUNCTIONS

## 🧠 What Problem Do Functions Solve?

## Imagine you're running a restaurant.

## Every time a customer orders food, your kitchen has to perform a series of steps:

        Take order
            ↓
        Prepare ingredients
            ↓
        Cook food
            ↓
        Package food
            ↓
        Serve customer

## Now imagine having to write all those instructions every single time someone orders.

# That would be ridiculous.

# Instead, you create a process called:

# "Prepare meal."

# Whenever an order comes in, you say:

# "Run the prepare-meal process."

# That's essentially what a function is.

## 📦 What Is a Function?

## A function is a reusable block of code designed to perform a particular task.

Think of it as a machine.

       INPUT
         ↓
    ┌─────────┐
    │ FUNCTION│
    │         │
    │  WORK   │
    │ HAPPENS │
    └─────────┘
         ↓
       OUTPUT

## A function can:

## 1. receive information.
## 2. perform instructions.
## 3. return information.

<!-- 1️⃣ Creating a Function -->

## Here's a simple function:

function greet() {
    console.log("Hello!");
}

## Let's break this apart.

**function**

## This keyword tells JavaScript:

## "I'm about to create a function."

**greet**

## This is the function's name.

## We're calling our function:

greet

**()**

## These parentheses are where we can put parameters.

We'll come back to that.

**{}**

## These braces contain the function's instructions.

So:

function greet() {
    console.log("Hello!");
}

means:

## Create a reusable machine called greet, and when that machine runs, print "Hello!".

## ⚠️ Creating ≠ Running

## This is extremely important.

## When you write:

function greet() {
    console.log("Hello!");
}

## JavaScript does not immediately execute:

console.log("Hello!");

## You've only defined the function.

## You've built the machine.

## You haven't switched it on.

<!-- ▶️ Calling a Function -->

## To execute it:

greet();

## This is called calling or invoking the function.

## So:

Create machine
     ↓
function greet() {}
     ↓
Machine exists
     ↓
Press button
     ↓
greet()
     ↓
Machine runs

## 🧠 Function Analogy: A Recipe

# Imagine a recipe.

# A recipe says:

1. Get flour
2. Add water
3. Mix
4. Bake

# The recipe itself isn't the food.

# Similarly:

function makeCake() {
    // instructions
}

# isn't executing the instructions yet.

# It's simply the recipe.

# Calling:

makeCake();

# is saying:

# "Let's actually follow the recipe now."

<!------ 2️⃣ Parameters ----->

# Now let's make functions more useful.

# Suppose we have:

function greet() {
    console.log("Hello!");
}

# This always says:

Hello!

# What if we want to greet different people?

# We can use a parameter.

function greet(name) {
    console.log("Hello " + name);
}

# name is a parameter.

# Think of it as an empty slot.

greet( ______ )
       ↑
     name

# The function is saying:

# "I don't know the person's name yet. Give me one when you call me."\


<!-- 3️⃣ Arguments -->

# Now we call it:

greet("Emzy");

# "Emzy" is the argument.

# The argument is the actual value we provide to the function.

# So:

function greet(name) {

name → parameter

# while:

greet("Emzy");

"Emzy" → argument

# 🧠 Analogy: A Form

# Imagine filling out a form:

Name: __________
Age:  __________

# The blank fields are like parameters.

# Then someone fills in:

Name: Emzy
Age: 20

# Those actual values are like arguments.

# So:

PARAMETER
    ↓
Empty slot

ARGUMENT
    ↓
Actual value inserted into slot
Multiple Parameters

# A function can have multiple parameters:

function add(a, b) {
    console.log(a + b);
}

# Call it:

add(10, 5);

# JavaScript matches them based on position:

a → 10
b → 5

# Then:

a + b

becomes:

10 + 5

giving:

15


<!------- 4️⃣ Return ------->

# Now we're going to learn one of the most important concepts in functions.

# Consider:

function add(a, b) {
    return a + b;
}

# What does return mean?

Think about our machine again.

       10 + 5
          ↓
    ┌────────────┐
    │    ADD     │
    │   MACHINE  │
    └────────────┘
          ↓
          15

## return is how the function sends its result back out.

## 📤 return Analogy

## Imagine you go to a calculator.

# You type:

10 + 5

# The calculator doesn't just calculate it internally.

# It gives you:

15

# That 15 is the output.

# Similarly:

function add(a, b) {
    return a + b;
}

# says:

# "Calculate this and give the result back."

Then:

let result = add(10, 5);

means:

add(10, 5)
     ↓
    15
     ↓
result = 15

## ⚠️ console.log() vs return

## This distinction is extremely important.

## Consider:

function add(a, b) {
    console.log(a + b);
}

## This displays the result.

## But:

function add(a, b) {
    return a + b;
}

## returns the result.

Think:

console.log()
     ↓
"Show this to me."

return
     ↓
"Give this value back to me."

## For example:

function add(a, b) {
    console.log(a + b);
}

let result = add(10, 5);

console.log(result);

## The first console might show:

15

## But result will be:

undefined

## because the function didn't return anything.

<!-- ---------------- -->
## Function Scope — A First Introduction

There's another important idea.

## Variables created inside a function are generally only available inside that function.

For example:

function () {}

() => {} //Arrow function

function greet() {}

const greet = () => {}