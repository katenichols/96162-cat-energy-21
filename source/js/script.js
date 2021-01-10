var navMain = document.querySelector(".main-nav");
var buttonToggle = document.querySelector(".page-header__menu-toggle");
var pageContactsMap = document.querySelector(".page-contacts__map");
var pageContactsMapiFrame = document.createElement("iframe");
var exampleBackground = document.querySelector(".page-example__background");
var windowWidth = window.innerWidth;
var exampleBackgroundLeft = (windowWidth - 1440)/2 + 1045;

buttonToggle.classList.remove("page-header__menu-toggle--nojs");
buttonToggle.classList.add("page-header__menu-toggle--closed");

buttonToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--visible")) {
    buttonToggle.classList.remove("page-header__menu-toggle--opened");
    buttonToggle.classList.add("page-header__menu-toggle--closed");
    navMain.classList.remove("main-nav--visible");
    navMain.classList.add("main-nav--unvisible");
  } else {
    buttonToggle.classList.remove("page-header__menu-toggle--closed");
    buttonToggle.classList.add("page-header__menu-toggle--opened");
    navMain.classList.remove("main-nav--unvisible");
    navMain.classList.add("main-nav--visible");
  }
});

exampleBackground.style.left = exampleBackgroundLeft + "px";

pageContactsMap.classList.remove('page-contacts__map--nojs');
pageContactsMap.appendChild(pageContactsMapiFrame);
pageContactsMapiFrame.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A2a890efad02f599ba6133f88531ccfde61104518a13840f0b2bd3ceb49299b92&amp;source=constructor";
pageContactsMapiFrame.width = "100%";
pageContactsMapiFrame.height = "100%";
pageContactsMapiFrame.style = "border:0";
pageContactsMapiFrame.allowFullscreen = "";
pageContactsMapiFrame.ariaHidden = false;
