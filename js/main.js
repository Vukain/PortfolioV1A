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