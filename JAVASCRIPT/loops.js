// 1. FOR LOOP - when you know exactly how many times to repeat

for (let index = 0; index < 5; index++) {
    console.log('iteration number:', index);
}

// Breaking it down:
// let index = 0; // start at 0
// index < 5; // keep going while index is less than 5
// index++ // add 1 to index each time (index++ is short for index = index + 1)

// COUNTING BACKWARDS
for (let index = 5; index > 0; index--) {
    console.log('counting down:', index);
}

// 2. WHILE LOOP - when you do not know how many iterations you need

while ("something is true") {
    // Do something
}

//EXAMPLE:
let i = 1;           // i = 1

while (i < 2) {
    console.log(i);
    i++;             // i = i + 1 (increment)
}

let password = '';
while (password.length < 8) {
    password += 'x'; // keep adding 'x' untill password is 8 chars long
}
console.log(password);

// 3. FOR...OF LOOP - the cleanest way to loop over arrays (use this most)
const fruits = ['apple', 'banana', 'mango', 'peach'];

for (const fruit of fruits) {
    console.log('I love', fruit);
}

