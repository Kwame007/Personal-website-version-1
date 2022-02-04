const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".main-nav__items");
const menuNav = document.querySelector(".main-nav__lists");
const arrowIcon = document.querySelector(".fas");
const navItems = document.querySelectorAll(".main-nav__item");

const sectionContent = document.querySelector(".section-content");
const rocket = document.querySelector(".main-footer");
const navbar = document.querySelector(".main-nav");

const formModal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay-bg");
const close = document.querySelector(".close-modal");

let showMenu = false;

// event listener
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // remove pulsing button
    document.querySelector(".section-content__icon").classList.add("show");

    hamburger.classList.add("open");

    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    arrowIcon.style.visibility = "hidden";

    showMenu = true;
    console.log(hamburger);
  } else {
    // show pulsing button
    document.querySelector(".section-content__icon").classList.remove("show");

    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    arrowIcon.style.visibility = "visible";

    showMenu = false;
  }
}

// smooth scrool function
const smoothScroll = function (e) {
  e.preventDefault();
  let id;
  // matching condition (pulsing btn)
  if (e.target.classList.contains("arrow-down")) {
    id = e.target.parentElement.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  // matching condition (rockect img)
  if (e.target.classList.contains("beam-up")) {
    id = e.target.parentElement.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  // matching condition (navigation)
  if (e.target.classList.contains("main-nav__link")) {
    id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

// close modal function
const closeModal = function (e) {
  e.preventDefault();

  // hide form
  document.querySelector(".form-modal").classList.add("hide");
  // hide overlay
  document.querySelector(".overlay-bg").classList.add("hide");
};

// smooth scrolling
sectionContent.addEventListener("click", smoothScroll);
rocket.addEventListener("click", smoothScroll);
navbar.addEventListener("click", smoothScroll);

// form modal
formModal.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    // show form modal
    document.querySelector(".form-modal").classList.remove("hide");
    // show overlay
    document.querySelector(".overlay-bg").classList.remove("hide");
  });
});

// close modal
overlay.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);
