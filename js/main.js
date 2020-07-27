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
console.log(projects[0].offsetTop)
const animImages1 = document.querySelectorAll(".anim1");

let ia = 1;
let quarter = projects[0].offsetHeight / 4

let drawing1 = true
window.addEventListener("scroll", () => {

    if ((window.scrollY + window.innerHeight > projects[0].offsetTop + 400) && drawing1) {
        let hei = window.scrollY + window.innerHeight - projects[0].offsetTop - 400;
        animImages1[4].style.opacity = hei / quarter;

        if (animImages1[4].style.opacity > 1) {
            animImages1[4].style.opacity = 1;
            animImages1[3].style.opacity = 0;
            animImages1[2].style.opacity = 0;
            animImages1[1].style.opacity = 0;
            animImages1[0].style.opacity = 0;
            drawing1 = false;
        }
    } else if ((window.scrollY + window.innerHeight > projects[0].offsetTop + 300) && drawing1) {
        let hei = window.scrollY + window.innerHeight - projects[0].offsetTop - 300;
        animImages1[3].style.opacity = hei / quarter;

    } else if ((window.scrollY + window.innerHeight > projects[0].offsetTop + 200) && drawing1) {
        let hei = window.scrollY + window.innerHeight - projects[0].offsetTop - 200;
        animImages1[2].style.opacity = hei / quarter;

    } else if ((window.scrollY + window.innerHeight > projects[0].offsetTop + 100) && drawing1) {
        let hei = window.scrollY + window.innerHeight - projects[0].offsetTop - 100;
        animImages1[1].style.opacity = hei / quarter;

    }







    // if (window.scrollY + window.innerHeight > projects[0].offsetTop + 300) {
    //     animImages1[2].style.opacity = 1
    // }

    // if (window.scrollY + window.innerHeight > projects[0].offsetTop + 400) {
    //     animImages1[3].style.opacity = 1
    // }
    // if (window.scrollY + window.innerHeight > projects[0].offsetTop + 500) {
    //     animImages1[4].style.opacity = 1
    // }
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