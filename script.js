const overlay =
document.querySelector(".logo-overlay");

setInterval(() => {

    overlay.classList.add("show");

    setTimeout(() => {

        overlay.classList.remove("show");

    }, 5000);

}, 300000);
