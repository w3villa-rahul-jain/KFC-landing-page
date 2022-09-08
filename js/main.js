nav = document.querySelector(".nav");
toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {
  console.log("click");
  nav.classList.toggle("collapse-toggle");
});

$(document).ready(function () {
  $(".owl-two").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    gap: 50,
    autoplay: false,
    autoplayTimeout: 1100,
    dots: false,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      768: {
        items: 6,
      },
      1000: {
        items: 9,
      },
    },
  });

  $(".owl-one").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    gap: 20,
    autoplay: true,
    autoplayTimeout: 11000000,
    dots: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
