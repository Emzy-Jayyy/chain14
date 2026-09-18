const div = document.createElement("div");
console.log(div)

const heading = document.createElement("h1");
heading.textContent = "welcome"

document.body.appendChild(heading)

const rave = document.createElement("h1");
rave.textContent = "Wagwan Guys";
document.body.prepend(rave);