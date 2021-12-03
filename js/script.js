//Make mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Smooth Scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (
      link.classList.contains("nav-link") ||
      link.classList.contains("main-nav-link")
    ) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
