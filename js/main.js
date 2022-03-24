let blackwhite = document.getElementById("black-white");
let main = document.querySelector(".main");
let barLinkContain = document.querySelector(".nav-list");
let navbar = document.querySelector("#opennav");
let burgerToggle = document.querySelector(".burgerbar");

burgerToggle.addEventListener("click", function () {
  navbar.classList.toggle("heightsize");
  barLinkContain.classList.toggle("openbar");
});

blackwhite.addEventListener("click", function () {
  main.classList.toggle("blacks");
});
