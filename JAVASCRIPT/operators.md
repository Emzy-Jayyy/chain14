            OPERATORS
                ↓
        We can perform operations and ask questions
                ↓
            CONDITIONALS
                ↓
        We can make decisions based on those questions
                ↓
            FUNCTIONS
                ↓
        We can package instructions and reuse them

## 🧠 Simple definition

## An operator is a symbol or keyword that tells JavaScript to perform an operation.

## Think of operators as action buttons.


+   → add
-   → subtract
*   → multiply
/   → divide
>   → is greater than?
===  → are these exactly equal?
&&  → are both conditions true?

## 1️⃣ Arithmetic Operators

## Let's start with the easiest ones.

## Imagine you own a little shop.

## You have:

let apples = 10;
let oranges = 5;

## You want to know how many fruits you have altogether.

let total = apples + oranges;

console.log(total);

## Output:

15

## The + operator is doing the work.

## The basic arithmetic operators
## Operator	Meaning	Example	Result

+	Addition	10 + 5	15
-	Subtraction	10 - 5	5
*	Multiplication	10 * 5	50
/	Division	10 / 5	2
%	Remainder	10 % 3	1
**	Exponentiation	2 ** 3	8

## 🤔 The % operator is interesting

## Suppose you have 10 sweets and want to give 3 sweets to each person.

10 / 3

## You can give 3 to three people, with 1 sweet left over.

## That leftover is what % gives you:

10 % 3

Result:

1

## So think of % as:

"After dividing, how much is left?"


<!-- ----------------- -->

## 2️⃣ Assignment Operators

## Now let's imagine you have a box.

let money = 100;

## Think of money as a box containing 100.

## The = operator means:

## "Put this value into this variable."

So:

let money = 100;

means:

money 📦
  ↓
100

## But here's something important:

## = does NOT mean "equals" in the mathematical sense.

## In JavaScript:

## let age = 15;

means:

## Store 15 inside age.

## What about +=?

Suppose:

let money = 100;

Then:

money += 50;

## This is basically shorthand for:

money = money + 50;

So now:

money = 150

## It's like saying:

## "Take what's already in the box and add 50 more."

Similarly:

## money -= 20;

means:

## money = money - 20;

And:

## money *= 2;

means:

## money = money * 2;

<!-- ------------------------------- -->
## 3️⃣ Comparison Operators


## Imagine I'm holding two students' test scores:

let john = 80;
let mary = 90;

## I ask:

## Is Mary's score greater than John's?

## JavaScript can answer that using:

mary > john

## The result isn't a number.

It's:

true

Because 90 really is greater than 80.

## Comparison operators ask questions.

## Think of them as interviewers asking JavaScript questions.

10 > 5

"Is 10 greater than 5?"

Answer:

true

## Common comparison operators
>    greater than
<    less than
>=   greater than or equal to
<=   less than or equal to
===  strictly equal to
!==  not strictly equal to

## For example:

10 > 5       // true
10 < 5       // false
10 >= 10     // true
10 <= 10     // true
10 === 10    // true
10 !== 5     // true

## Notice something important:

## Comparison operators usually produce a Boolean:

true

or

false

## ⚠️ = vs ===

## This is one of the first things beginners need to understand really well.

## Look at:

let age = 15;

## Here = is assignment.

## You're putting 15 into age.

## But:

age === 15

## is a comparison.

## You're asking:

## "Is the value inside age exactly 15?"

## Think:

=     → PUT something in the box 📦

===   → INSPECT the box 🔍

## That's a useful mental model.

<!--------- 4️⃣ Logical Operators -------->
## 4️⃣ Logical Operators

## Now imagine you're trying to enter a school competition.

## The rules say:

## You must be at least 13 years old AND have a student ID.

## We could write:

let age = 15;
let hasStudentId = true;

age >= 13 && hasStudentId

## Both conditions are true, so the result is:

true

## The && operator means AND.

## && — AND

## Think of a security guard saying:

## "You need BOTH keys to enter."

## hasKey1 && hasKey2

## Both must be true.

true  && true  → true
true  && false → false
false && true  → false
false && false → false


## || — OR

## Now imagine a teacher says:

## "You can submit your assignment through the website OR hand it in physically."

## You only need one option.

## That's ||.

## onlineSubmission || physicalSubmission

## Think:

## At least one must work.


## ! — NOT

## This one flips a Boolean.

## let raining = true;

## Then:

!raining

## becomes:

false

## It's like saying:

"Is it NOT raining?"

If raining is true, then !raining is false.


<!-- 5️⃣ Increment and Decrement -->

These are extremely common.

## Imagine you are counting students:

let students = 10;

## One more student walks into the classroom.

## You could write:

students = students + 1;

## But JavaScript gives us a shorter way:

 students++;

## ++ means:

## Increase by 1.

## So:

students++;

## changes:

10 → 11

## And:

students--;

## means:

## 
Decrease by 1.

11 → 10

##             🎯 The Big Picture


                    OPERATORS
                        │
       ┌────────────────┼────────────────┐
       │                │                │
   Arithmetic      Assignment       Comparison
       │                │                │
   + - * / %       = += -= *=      > < >= <= === !==
       │
       └───────────────┐
                       │
                  Logical
                       │
                    && || !

