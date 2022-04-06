$(function () {
     $(document).scroll(function () {
          var $nav = $(".top");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
     });
});

const body = document.querySelector("body"),
     sidebar = body.querySelector("nav.sidebar"),
     modeToggle = document.querySelector(".mode-toggle"),
     sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
     body.classList.add("dark");
}

//js toggle light dark mode
modeToggle.addEventListener("click", () => {
     modeToggle.classList.toggle("active");
     body.classList.toggle("dark");

     if (!body.classList.contains("dark")) {
          localStorage.setItem("mode", "light-mode");
     } else {
          localStorage.setItem("mode", "dark-mode");
     }
})

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
     sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
     sidebar.classList.toggle("close");
     if (sidebar.classList.contains("close")) {
          localStorage.setItem("status", "close");
     } else {
          localStorage.setItem("status", "open")
     }
})