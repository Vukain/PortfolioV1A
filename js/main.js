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
const projects = document.querySelectorAll(".project");

const animImages1 = document.querySelectorAll(".anim1");
const animImages2 = document.querySelectorAll(".anim2");
const animImages3 = document.querySelectorAll(".anim3");
const animImages4 = document.querySelectorAll(".anim4");

let quarter = projects[0].offsetHeight / 4

function drawingQue(animImages, i) {
    let drawing = true
    if ((window.scrollY + window.innerHeight > projects[i].offsetTop + 400) && drawing) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 400;
        animImages[4].style.opacity = hei / quarter;
        animImages[3].style.opacity = 1
        if (animImages[4].style.opacity > 1) {
            animImages[4].style.opacity = 1;
            animImages[3].style.opacity = 0;
            animImages[2].style.opacity = 0;
            animImages[1].style.opacity = 0;
            animImages[0].style.opacity = 0;
            console.log(drawing)
            drawing = false;
            console.log(drawing)
        }
    } else if ((window.scrollY + window.innerHeight > projects[i].offsetTop + 300) && drawing) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 300;
        animImages[3].style.opacity = hei / quarter;
        animImages[2].style.opacity = 1;
        animImages[1].style.opacity = 0;
        animImages[0].style.opacity = 0;

    } else if ((window.scrollY + window.innerHeight > projects[i].offsetTop + 200) && drawing) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 200;
        animImages[2].style.opacity = hei / quarter;
        animImages[1].style.opacity = 1
        animImages[0].style.opacity = 0

    } else if ((window.scrollY + window.innerHeight > projects[i].offsetTop + 100) && drawing) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 100;
        animImages[1].style.opacity = hei / quarter;
        animImages[0].style.opacity = 1
    }
}

window.addEventListener("scroll", () => {
    drawingQue(animImages1, 0);
    drawingQue(animImages2, 1);
    drawingQue(animImages3, 2);
    drawingQue(animImages4, 3);

})

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