// var a = [10, 23, 101, 150, 290];

// var ul = document.querySelector("ul");

// a = a.sort(() => 0.5 - Math.random());

// a.forEach(e => {
//     ul.innerHTML += `<li>${e}</li>`;
// });

// setTimeout(() => {
//     ul.style.cssText = `
//    opacity: 0.5;
//    font-size: 33px;
//    `;
// }, 3000);

// console.log(getComputedStyle(ul, "after").content);

// ul.classList.add("active");
// ul.classList.remove("active");

// console.log(ul.classList.contains("active"));

// setInterval(() => {
//     ul.classList.toggle("active");
// }, 1000);

// console.log(ul.getAttribute("data-active"));
// ul.setAttribute("data-active", "45");
// console.log(ul.getAttribute("data-active"));
// console.log(ul.hasAttribute("data-active"));
// ul.removeAttribute("data-active");

// console.log(ul.hasAttribute("data-active"));
// setTimeout(() => {
//     let b = ul.children[ul.children.length - 1];
//     ul.insertBefore(b, ul.children[0]);
// }, 5000);

// var userInput = +prompt("num");

// let index = -1;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] <= userInput && a[i + 1] >= userInput) {
//         index = i;
//         break;
//     }
// }

// if (index === -1) {
//     if (a[a.length - 1] < userInput) {
//         a.push(userInput);
//         index = a.length - 1;
//     } else {
//         a.unshift(userInput);
//         index = 0;
//     }
// } else {
//     a.splice(index + 1, 0, userInput);
// }

// let li = document.createElement("li");
// li.innerHTML = userInput;

// ul.insertBefore(li, ul.children[index + 1]);
// let res = 0;

// function _click(i, id) {
//         res = res + i;

//         // let n = +document.querySelector("h1").innerText;
//         // n += i;

//     document.querySelector("h1").innerText = res;

//     let b = document.querySelector(".click");
//     if (b) b.classList.remove("click");

//     document.querySelector(`#${id}`).classList.toggle("click");
// }

let clicks = 0;

function up(i) {
    clicks += i;
    document.querySelector("#state").innerText = clicks;
}

function run() {
    let button = document.querySelector("button");
    button.setAttribute("disable", "");
    document.querySelector("#sun").style.background = "yellow";
    setTimeout(() => {
        document.querySelector("#sun").style.background = "none";
    }, `${clicks}000`);
    let id = setInterval(() => {
        if (clicks > 0) {
            clicks -= 1;
            document.querySelector("#state").innerText = clicks;
        } else {
            clearInterval(id);
            button.removeAttribute("disable", "");
        }
        // button.removeAttribute("disable", "");
    }, 1000);
}

function ff() {
    return Math.round(Math.random() * 16).toString(16);
}

document.body.onclick = function() {
    this.style.background = `#${ff()}${ff()}${ff()}`;
};