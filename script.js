// When the user clicks on the "Back To Top" link, scroll to the top of the page
document.querySelector("#contactme a:last-child").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: "smooth"});
});

// Add a class to the navigation links when the user scrolls down the page
const navLinks = document.querySelectorAll("nav ul li a");
const headerHeight = document.querySelector("header").offsetHeight;

window.addEventListener("scroll", function() {
  if (window.pageYOffset > headerHeight) {
    navLinks.forEach(link => link.classList.add("scrolled"));
  } else {
    navLinks.forEach(link => link.classList.remove("scrolled"));
  }
});
