const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".main-nav__items");
const menuNav = document.querySelector(".main-nav__lists");
const arrowIcon = document.querySelector(".fas");
const navItems = document.querySelectorAll(".main-nav__item");

let showMenu = false;

// event listener
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");

    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    arrowIcon.style.visibility = "hidden";

    showMenu = true;
    console.log(hamburger);
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    arrowIcon.style.visibility = "visible";

    showMenu = false;
  }
}

// recaps
const count = function () {
  let counter = 0;
  return function () {
    console.log(counter++);
  };
};
const callCounter = count();
callCounter();
callCounter();

function oneWord(word) {
  return word.replace(/ /g, "").toLowerCase();
}
console.log(oneWord("AMAGIDON TIS THE AMAGIS"));

const transform = function (string, func) {
  console.log(`Transformed string: ${func(string)}`);
  console.log(`Original string: ${string}`);
  console.log(`Transformed by: ${func.name}`);
};

const upperFistWord = function (str) {
  const strArr = str.toLowerCase().split(" ");
  const firstWordUpper = [];
  for (const letter of strArr) {
    firstWordUpper.push(letter[0].toUpperCase() + letter.slice(1));
  }

  return firstWordUpper.join("");
};

transform("welcome", upperFistWord);
transform("infinitecimal", upperFistWord);

const greeting = function () {
  return function (name) {
    console.log(`Hello ${name}`);
  };
};
greeting()("Wilson");

const jonasCatalogue = {
  name: "Jonas",
  books: [],
  addBook(bookName, ISBN) {
    console.log(
      `${this.name} added a new book titled: ${bookName} and ISBN: ${ISBN}`
    );

    this.books.push(bookName);
  },
};
jonasCatalogue.addBook("In The Wonder Land🌋", "E234");
jonasCatalogue.addBook("Squid Game🦑", "S323");
console.log(jonasCatalogue);

// using the call() method
const markCatalogue = {
  name: "Mark",
  books: [],
};
const addBook = jonasCatalogue.addBook;
addBook.call(markCatalogue, "Only You👧🏼", "A998");
console.log(markCatalogue);

// using apply() method
const sarahCatalogue = {
  name: "Sarah",
  books: [],
};
addBook.apply(sarahCatalogue, ["I Am Me🥰", "E232"]);

const addToCat = addBook.bind(markCatalogue);
addToCat("Breaking Bad 💀", "A123");
