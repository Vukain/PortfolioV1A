const foxerText = document.querySelectorAll(".section_name")
let sBrowser, sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
    foxerText.forEach(function (div) {
        div.classList.remove("gradient")
    })
}