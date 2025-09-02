let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

navLinks[0].classList.add("active");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    let placement = scrollY;
    if (placement > sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
