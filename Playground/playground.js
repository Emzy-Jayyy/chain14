// USING CLASSLIST: ADD, REMOVE, TOGGLE, CONTAINS

// classList is an object that allows JavaScript to manage an element's CSS classes.

/*
Notice the word

"""manage"""

Not create CSS.
Not design CSS.
Manage CSS classes.
*/

// ADD
const button = document.querySelector("#btn");
button.textContent = "click"
// button.classList.add("red")
// button.classList.add("large")

// REMOVE
const p = document.querySelector(".large-js")
p.classList.remove("large")

// CONTAIN
const heading = document.querySelector("h3");
if (heading.classList.contains("hello")) {
  console.log("It has a hello class");
}

if (heading.classList.contains("rage")) {
  console.log("Yes it contains rage")
}

// TOGGLE
const modeButton = document.querySelector("#themeBtn");
modeButton.addEventListener("click", () => {
  const bodyTag = document.querySelector("body");
  bodyTag.classList.toggle("dark")
  if (modeButton.textContent === "Dark Mode") {
    modeButton.textContent = "Light Mode"
  }
  else {
    modeButton.textContent = "Dark Mode"
  }
})

const heading2 = document.querySelector("h2");
heading2.innerHTML = ""
