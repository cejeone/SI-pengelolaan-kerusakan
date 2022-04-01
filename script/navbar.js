$(function () {
     $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
     });
});

const body = document.querySelector("body"),
     nav = document.querySelector("nav"),
     sidebarOpen = document.querySelector(".sidebarOpen"),
     sidebarClose = document.querySelector(".sidebarClose");

//js sidebar
sidebarOpen.addEventListener("click", () => {
     nav.classList.add("active");
})

body.addEventListener("click", e => {
     let clickedElm = e.target;

     if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
          nav.classList.remove("active");
     }
})