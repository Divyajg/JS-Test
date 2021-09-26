//1.
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("This is divisible by 3");
    } else if (i % 5 == 0) {
        console.log("This is divisible by 5");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("Jackpot");
    } else {
        console.log(i);
    }
}

//2.
const button1 = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(button1);
button1.textContent = 'test button';

let imgDisplay = document.createElement("p");
body.appendChild(imgDisplay);

function getImage() {
    let img = document.createElement("img");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
    imgDisplay.appendChild(img);
}

button1.addEventListener("click", getImage);

//3.
const p = document.createElement("p");
body.appendChild(p);
const p1 = document.createElement("p");
body.appendChild(p1);
const p2 = document.createElement("p");
body.appendChild(p2);

fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then((data) => {
        const array = data.data;
        for (let i = 0; i < 3; i++) {
            console.log(array[i].first_name);
            p.innerHTML = array[0].first_name;
            p1.innerHTML = array[1].first_name;
            p2.innerHTML = array[2].first_name;
        }
    });

//4.

class Product {
    constructor(name, price) {

    }

    logProduct() {

    }
}