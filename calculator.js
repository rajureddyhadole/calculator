let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("input");
let evaluate = document.querySelector(".evaluate");
let clear = document.querySelector(".clear");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input.value += button.innerText;
    });
});

evaluate.addEventListener('click', () => {
    input.value = eval(input.value);
});

clear.addEventListener('click', () => {
    input.value = "";
})

