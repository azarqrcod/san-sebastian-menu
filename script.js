const overlay =
document.querySelector(".logo-overlay");

setInterval(() => {

    overlay.classList.add("show");

    setTimeout(() => {

        overlay.classList.remove("show");

    }, 4000);

}, 600000);
