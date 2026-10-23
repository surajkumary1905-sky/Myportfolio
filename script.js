console.log("Welcome to Suraj Kumar's Portfolio!");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Portfolio button clicked!");
    });
});