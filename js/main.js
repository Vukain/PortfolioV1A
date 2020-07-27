const foxerText = document.querySelectorAll(".section_name")
let sBrowser, sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
    foxerText.forEach(function (div) {
        div.classList.remove("gradient")
    })
}

const queGreen = "images/que_green.svg";
const queGreenAnim = ["images/que_green_an1.svg", "images/que_green_an2.svg", "images/que_green_an3.svg", "images/que_green_an4.svg", "images/que_green_an5.svg"];
const queYellow = "images/que_yellow.svg";
const queYellowAnim = ["images/que_yellow_an1.svg", "images/que_yellow_an2.svg", "images/que_yellow_an3.svg", "images/que_yellow_an4.svg", "images/que_yellow_an5.svg"];

const queUno1 = document.querySelectorAll(".que_uno1");
const queUno2 = document.querySelectorAll(".que_uno2");
const queUno3 = document.querySelectorAll(".que_uno3");
const queUno4 = document.querySelectorAll(".que_uno4");
const queUno5 = document.querySelectorAll(".que_uno5");

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
        queUno1.forEach(function (img) {
            img.setAttribute("src", queYellowAnim[0])
        })
        queUno2.forEach(function (img) {
            img.setAttribute("src", queYellowAnim[1])
        })
        queUno3.forEach(function (img) {
            img.setAttribute("src", queYellowAnim[2])
        })
        queUno4.forEach(function (img) {
            img.setAttribute("src", queYellowAnim[3])
        })
        queUno5.forEach(function (img) {
            img.setAttribute("src", queYellowAnim[4])
        })

        queDos.forEach(function (img) {
            img.setAttribute("src", queGreen)
        })
    } else {
        queUno1.forEach(function (img) {
            img.setAttribute("src", queGreenAnim[0])
        })
        queUno2.forEach(function (img) {
            img.setAttribute("src", queGreenAnim[1])
        })
        queUno3.forEach(function (img) {
            img.setAttribute("src", queGreenAnim[2])
        })
        queUno4.forEach(function (img) {
            img.setAttribute("src", queGreenAnim[3])
        })
        queUno5.forEach(function (img) {
            img.setAttribute("src", queGreenAnim[4])
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

let quarter = projects[0].offsetHeight / 4;

let skillsPos = document.querySelector(".skills").offsetTop
console.log(skillsPos)

function drawingQue(animImages, i) {
    let drawing = (window.scrollY + window.innerHeight < skillsPos + 200);
    if (drawing && (window.scrollY + window.innerHeight > projects[i].offsetTop + 400)) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 400;
        animImages[4].style.opacity = hei / quarter;
        animImages[3].style.opacity = 1;
        if (animImages[4].style.opacity > 1) {
            animImages[4].style.opacity = 1;
            animImages[3].style.opacity = 0;
            animImages[2].style.opacity = 0;
            animImages[1].style.opacity = 0;
            animImages[0].style.opacity = 0;

            drawing = false;
        }
    } else if (drawing && (window.scrollY + window.innerHeight > projects[i].offsetTop + 300)) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 300;
        animImages[3].style.opacity = hei / quarter;
        animImages[2].style.opacity = 1;
        animImages[1].style.opacity = 0;
        animImages[0].style.opacity = 0;

    } else if (drawing && (window.scrollY + window.innerHeight > projects[i].offsetTop + 200)) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 200;
        animImages[2].style.opacity = hei / quarter;
        animImages[1].style.opacity = 1;
        animImages[0].style.opacity = 0;

    } else if (drawing && (window.scrollY + window.innerHeight > projects[i].offsetTop + 100)) {
        let hei = window.scrollY + window.innerHeight - projects[i].offsetTop - 100;
        animImages[1].style.opacity = hei / quarter;
        animImages[4].style.opacity = 0;
        animImages[0].style.opacity = 1;
    }
}

const skills = document.querySelectorAll(".skill");
const saturImages = document.querySelectorAll(".satur");
let skillHeight = skills[0].offsetHeight;

function saturQue(saturImage, i) {
    if ((window.scrollY + window.innerHeight > skills[i].offsetTop + 200) && (window.scrollY + window.innerHeight < skills[i].offsetTop + 200 + skillHeight)) {
        let hei = window.scrollY + window.innerHeight - skills[i].offsetTop - 200;
        saturImage.style.filter = `saturate(${hei * 1.05/ skillHeight})`
    }
}


const effToggle = document.querySelector(".fa-linkedin");
effToggle.addEventListener("click", () => {
    effToggle.classList.toggle("enabled")
})

window.addEventListener("scroll", () => {
    if (effToggle.className == "fab fa-linkedin enabled") {
        drawingQue(animImages1, 0);
        drawingQue(animImages2, 1);
        drawingQue(animImages3, 2);
        drawingQue(animImages4, 3);

        saturQue(saturImages[0], 0);
        saturQue(saturImages[1], 1);
        saturQue(saturImages[2], 2);
    }
})