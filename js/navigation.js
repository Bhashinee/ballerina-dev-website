const categories = document.querySelectorAll(".chapter-item > div");
const toggleButtons = document.getElementsByClassName("toggle");

const mainCategories = document.querySelectorAll(".part-title > div");
const toggleMainCategories = document.getElementsByClassName("toggle-category");

// scrollbar
var active = $(".active").closest("ol").closest("li").prev().position().top;
$(".sidebar-scrollbox").scrollTop(active);

// toggle category animation
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", () => {
    let parentClassName = categories[i].parentElement.className;
    if (parentClassName.includes("expanded")) {
      categories[i].parentElement.className = "chapter-item bal-nav-item";
    } else {
      categories[i].parentElement.className =
        "chapter-item bal-nav-item expanded";
    }
  });
}

for (let j = 0; j < toggleButtons.length; j++) {
  toggleButtons[j].addEventListener("click", () => {
    let parentClassName = toggleButtons[j].parentElement.className;
    if (parentClassName.includes("expanded")) {
      toggleButtons[j].parentElement.className = "chapter-item bal-nav-item";
    } else {
      toggleButtons[j].parentElement.className =
        "chapter-item bal-nav-item expanded";
    }
  });
}

for (let x = 0; x < mainCategories.length; x++) {
  mainCategories[x].addEventListener("click", () => {
    let parentClassName = mainCategories[x].parentElement.className;
    if (parentClassName.includes("expanded")) {
      mainCategories[x].parentElement.className = "part-title";
    } else {
      mainCategories[x].parentElement.className = "part-title expanded";
    }
  });
}

for (let y = 0; y < toggleMainCategories.length; y++) {
  toggleMainCategories[y].addEventListener("click", () => {
    let parentClassName = toggleMainCategories[y].parentElement.className;
    if (parentClassName.includes("expanded")) {
      toggleMainCategories[y].parentElement.className = "part-title";
    } else {
      toggleMainCategories[y].parentElement.className = "part-title expanded";
    }
  });
}

// Prev/Next navigation
const leftTitle = document.querySelector(".prev-button > div > div");
const leftArrow = document.querySelector(".prev-button > svg");

const rightTitle = document.querySelector(".next-button > div > div");
const rightArrow = document.querySelector(".next-button > svg");

if (leftTitle !== null) {
  const leftNavContent = [leftTitle, leftArrow];
  leftNavContent.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      leftTitle.style.textDecoration = "underline";
      leftTitle.style.color = "#3ad1ca";
      leftArrow.style.fill = "#3ad1ca";
    });

    btn.addEventListener("mouseout", () => {
      leftTitle.style.textDecoration = "none";
      leftTitle.style.color = "#545cec";
      leftArrow.style.fill = "#545cec";
    });
  });
}

if (rightTitle !== null) {
  const rightNavContent = [rightTitle, rightArrow];
  rightNavContent.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      rightTitle.style.textDecoration = "underline";
      rightTitle.style.color = "#3ad1ca";
      rightArrow.style.fill = "#3ad1ca";
    });

    btn.addEventListener("mouseout", () => {
      rightTitle.style.textDecoration = "none";
      rightTitle.style.color = "#545cec";
      rightArrow.style.fill = "#545cec";
    });
  });
}
