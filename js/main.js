const foxerText = document.querySelectorAll(".section_name")
let sBrowser, sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
    foxerText.forEach(function (div) {
        div.classList.remove("gradient")
    })
}

const queGreen = "images/que_green.svg";
const queYellow = "images/que_yellow.svg";

const queUno = document.querySelectorAll(".que_uno");
const queDos = document.querySelectorAll(".que_dos");

const darkLight = document.querySelector(".fa-adjust");
const nav = document.querySelector("nav");
const burger = document.querySelector(".hamburger");


console.log(nav)
console.log(burger)

darkLight.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.className == "light") {
        queUno.forEach(function (img) {
            img.setAttribute("src", queYellow)
        })
        queDos.forEach(function (img) {
            img.setAttribute("src", queGreen)
        })
    } else {
        queUno.forEach(function (img) {
            img.setAttribute("src", queGreen)
        })
        queDos.forEach(function (img) {
            img.setAttribute("src", queYellow)
        })
    }
})

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
})

// const animImage = document.querySelector(".anim1");

// let ia = 1;

// animImage.addEventListener("click", () => {
//     ia += 1;
//     animImage.setAttribute("src", "images/que_green_an" + ia + ".svg");

//     if (ia == 5) {
//         ia = 0
//     }
// })

// const animImages = document.querySelector(".anim");
// console.log(animImages)
// let iam = 1;

// animImages.addEventListener("click", () => {
//     iam += 1;
//     console.log("click" + iam);
//     if (iam >= 3) {}
//     document.querySelector(`.anim${iam}s`).style.opacity = 1;
//     document.querySelector(`.anim${iam}s`).style.filter = "blur(0px)";
//     setTimeout(() => {
//         document.querySelector(`.anim${iam - 1}s`).style.opacity = 0;
//         document.querySelector(`.anim${iam - 1}s`).style.filter = "blur(0px)"
//         if (iam == 5) {
//             iam = 0;
//         };
//     }, 400)



// })