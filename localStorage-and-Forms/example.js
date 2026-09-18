let name = "Smart";

// localStorage.setItem(key, value)
localStorage.setItem("username", name);

const storedName = localStorage.getItem("username");
// console.log(storedName)

localStorage.removeItem("username");

localStorage.clear();

const user = {
  name: "John",
  highScore: 85
}

const userJSON = JSON.stringify(user);
localStorage.setItem("user", userJSON);

const storedUserJSON = localStorage.getItem("user");
console.log(storedUserJSON);
const parsedUser = JSON.parse(storedUserJSON);
console.log(parsedUser);

localStorage.removeItem("username");
// const tasks = ["Buy milk", "Walk the dog", "Do laundry"];

// const tasksJSON = JSON.stringify(tasks);
// console.log(tasksJSON);
