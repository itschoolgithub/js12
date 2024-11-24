let div = document.querySelector(".color");

// div.onclick = function () {
//     alert("Вы нажали на элемент .color!");
// };

// div.onclick = function1;

function function1(event) {
    // alert("1234");
    // console.log(event.type);
    // this.textContent = "World";
    console.log(event.currentTarget);
    console.log(this);
    console.log(event.target);
    // div.removeEventListener("click", function1);

    let h2 = document.querySelector('h2');
    h2.style.backgroundColor = "red";
}

// div.addEventListener("click", function () {
//     alert("Вы нажали на элемент .color!");
// });

div.addEventListener("click", function1);

let boldText = document.querySelector("div b");
boldText.addEventListener("click", function (event) {
    event.stopPropagation();
    this.remove();
});

let a = document.querySelector("a");

function function2 (event) {
    event.preventDefault();
    // alert(this.href);
    this.href = "https://youtube.com";
    this.textContent = "Перейти на youtube";
    a.removeEventListener("click", function2);
}

a.addEventListener("click", function2);

console.log(document.readyState);

document.addEventListener("DOMContentLoaded", function () {
    console.log("Документ загружен");
    console.log(document.readyState);

    setTimeout(function () {
        console.log(document.readyState);
    }, 2000);
});

let rect = document.querySelector(".rect");

rect.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this.textContent = "Курсор внутри";
});

rect.addEventListener("mouseout", function () {
    this.style.backgroundColor = "blue";
    this.textContent = "Курсор снаружи";
});

rect.addEventListener("click", function (event) {
    if (event.ctrlKey) {
        alert("Был клик с клавишей Ctrl");
    } else {
        alert("Был клик");
    }
});

let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    if (!event.repeat) {
        console.log(event.code);
        console.log(event.repeat);
    }
});