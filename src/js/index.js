// Page load

window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  // Page Loader
  document.querySelector(".page-loader").classList.add("fade-out");

  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});

// About Tabs
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const target = e.target.getAttribute("data-target");

    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// PortFolio Item Details Popup

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePorfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePorfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector("main").classList.toggle("fade-out");
}

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePorfolioPopup);

// Hide popup when clicking outside
document.addEventListener("click", (e) => {
  // console.log(e.target.classList);
  if (e.target.classList.contains("pp-inner")) {
    togglePorfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

// Navigation Toggler

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

// Active Section

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && !e.target.hash !== "") {
    navToggler.classList.add("hide");
    document.querySelector(".overlay").classList.add("active");
    const hash = e.target.hash;
    console.log(hash);

    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }

    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      if (document.querySelector(hash)) {
        document.querySelector(hash).classList.add("active");
      } else {
        document.querySelector("#home").classList.add("active");
      }
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});
