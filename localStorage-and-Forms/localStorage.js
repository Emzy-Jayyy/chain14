/* 
A small key-value storage box built into every browser.
Data saved here survives page refreshes and browser restarts, tied to the specific website's domain
*/

/* 
localStorage is:
 a small, persistent storage space inside the browser where a website can keep simple pieces of information for future visits.
*/

// THE 3 CORE localStorage METHODS

// SAVE DATA (key, value) - both key and value must be strings
// 1. localStorage.setItem(key, value)
localStorage.setItem("username", "John");

// READ DATA
// 2. localStorage.getItem(key)
const username = localStorage.getItem("username");
console.log(username); // "John"

// DELETE one item from localStorage
// 3. localStorage.removeItem(key)
localStorage.removeItem("username");

// DELETE everything from localStorage
localStorage.clear();

// The PROBLEM: localStorage ONLY stores strings!
// what if you want to save an ARRAY or an OBJECT?

const tasks = ["Buy milk", "Walk the dog", "Do laundry"];

// JSON.stringify() converts a JS value into a STRING for storage
localStorage.setItem("tasks", JSON.stringify(tasks));

// JSON.parse() converts a STRING back into a real JS array/object
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(storedTasks);   // ["Buy milk", "Walk the dog", "Do laundry"]
console.log(Array.isArray(storedTasks)); // true

// SAME PATTERN WORKS FOR OBJECTS
const user = {
  name: "John",
  highScore: 85
}

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
console.log(storedUser.name); // "John"
console.log(storedUser.highScore); // 85
