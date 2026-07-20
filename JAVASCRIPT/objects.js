// CREATING AN OBJECT
const developer = {
    firstName: 'Amara',
    lastName: 'Diallo',
    age: 27,
    isHired: false,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    address: {
        city: 'Lagos',
        country: 'Nigeria'
    }
};

// ACCESSING PROPERTIES --- two ways
console.log(developer.firstName);   // (dot notation)
console.log(developer['lastName']); // (bracket notation)
console.log(developer.skills[0]);   // (array inside object)
console.log(developer.address.city);// (nested object)

//MODIFYING PROPERTIES
developer.isHired = true;         // update existing
developer.salary = 75000;         // add new property
developer.skills.push('Node.js'); // modify array inside object

// DELETING A PROPERTY
delete developer.age;

// METHODS --- functions inside objects
const calculator = {
    brand: 'JavaCalc',
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) return 'Cannot divide by zero';
        return a / b
    }
};

console.log(calculator.add(10, 5))
console.log(calculator.divide(10, 0))

// LOOPING OVER OBJECT PROPERTIES
for (const key in developer) {
    console.log(key, ':', developer[key])
};

// Object built-in methods
console.log(Object.keys(developer));    // array of all property names
console.log(Object.values(developer));  // array of all values
console.log(Object.entries(developer)); // array of  [key, values] pairs



