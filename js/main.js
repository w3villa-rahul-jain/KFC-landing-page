nav = document.querySelector(".nav");
toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {
  console.log("click");
  nav.classList.toggle("collapse-toggle");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    gap: 50,
    autoplay: true,
    autoplayTimeout: 1100,
    dots: false,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: {
      0: {
        items: 3,
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


});
