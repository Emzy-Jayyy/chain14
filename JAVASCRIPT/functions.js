// THREE WAYS TO WRITE A FUNCTION (all do the same thing)

function getMilk(bottles) {
    console.log('LeaveHouse');
    console.log('moveRight');
    console.log('moveRight');
    console.log('moveUp');
    console.log('moveUp');
    console.log('moveUp');
   console.log('moveUp');
   console.log('moveRight');
    console.log('moveRight');
   console.log('buy' + bottles + 'of milk');
    console.log('moveLeft');
    console.log('moveLeft');
    console.log('moveDown');
    console.log('moveDown');
    console.log('moveDown');
    console.log('moveDown');
    console.log('moveLeft');
   console.log('moveLeft');
    console.log('enterHouse');
}

// 1. Function Declaration - can be called before it is defined (hoisted)
function greet(name) {
    return `Hello ${name}!`;
}
console.log(greet("Alice"));

// 2. FUNCTION EXPRESSION - stored in a variable, cannot be called before it is defined (not hoisted)
const greet2 = function(name) {
    return `Hello ${name}!`;
};


// 3. ARROW FUNCTION - a more concise way to write a function expression
const greet3 = (name) => {
    return `Hello ${name}!`;
};

// FUNCTIONS WITH MULTIPLE PARAMETERS
const calculateTip = (billAmount, tipPercentage) => {
    const tip = billAmount * (tipPercentage / 100);
    return tip;
};
console.log(calculateTip(100, 15)); // 15

// FUNCTIONS WITH DEFAULT PARAMETERS
const calculateTotal = (billAmount, tipPercentage = 15) => {
    const tip = billAmount * (tipPercentage / 100);
    return tip;
}
console.log(calculateTotal(100)); // 15

// THE 'FORGOT TO RETURN' MISTAKE

// WRONG - no return statement
const double = (num) => {
    num * 2; // this calculate but throws the result away
};
console.log(double(5)); // undefined

// MEMORY AID: if your function does a calculation, it must RETURN it.
// The computer will not assume you want the result -- You must explicitly say RETURN.
