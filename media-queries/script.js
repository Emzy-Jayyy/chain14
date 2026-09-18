const prints = document.querySelectorAll(".print");

prints.forEach(print => {
    print.textContent = "Akara and " + print.textContent
});