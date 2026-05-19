const pages = [
  "/san-sebastian-menu/hot/",
  "/san-sebastian-menu/cold/",
  "/san-sebastian-menu/cake/"
];

const current = window.location.pathname;

let index = pages.indexOf(current);

if (index === -1) {
  index = 0;
}

setTimeout(() => {

  let next = index + 1;

  if (next >= pages.length) {
    next = 0;
  }

  window.location.href = pages[next];

}, 15000);
