const input = document.getElementById("color");
const output = document.getElementById("output");

// let color;

document.getElementById("save").onclick = () => {
    localStorage.setItem("favoriteColor", input.value);
    // color = input.value;
};

document.getElementById("show").onclick = () => {
    output.textContent = localStorage.getItem("favoriteColor");
    // output.textContent = color;
};