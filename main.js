document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const ham_menu = document.querySelector(".ham-menu");

  // Toggle the menu and hamburger button states
  function toggleMenu() {
    menu_btn.classList.toggle("is-active");
    ham_menu.classList.toggle("active");
  }

  // Add click event listener to the hamburger button
  menu_btn.addEventListener("click", function () {
    toggleMenu(); // Toggle the menu
  });

  // Add click event listeners to each menu link
  ham_menu.addEventListener("click", function (e) {
    // Close the menu when a link is clicked
    if (e.target.tagName === "A") {
      toggleMenu();
    }
  });
};
