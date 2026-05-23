const pages = [
    "/hot/",
    "/cold/",
    "/cake/"
];

const currentPath =
window.location.pathname;

let currentIndex =
pages.indexOf(currentPath);

if(currentIndex === -1){
    currentIndex = 0;
}

setTimeout(() => {

    window.location.href = "/logo/";

}, 600000);

if(currentPath === "/logo/"){

    setTimeout(() => {

        window.location.href = "/hot/";

    }, 4000);
}
