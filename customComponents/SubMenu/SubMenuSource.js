(function () {
  function initMenu() {
    const cssmenu = document.getElementById("cssmenu");
    const button = cssmenu.querySelector(".button");
    const mainmenu = cssmenu.querySelector("ul");

    button.addEventListener("click", function () {
      button.classList.toggle("menu-opened");
      if (mainmenu.classList.contains("open")) {
        mainmenu.style.display = "none";
        mainmenu.classList.remove("open");
      } else {
        mainmenu.style.display = "block";
        mainmenu.classList.add("open");
        if (settings.format === "dropdown") {
          mainmenu
            .querySelectorAll("ul")
            .forEach((submenu) => (submenu.style.display = "block"));
        }
      }
    });

    cssmenu.querySelectorAll("li ul").forEach((submenu) => {
      const parentLi = submenu.parentElement;
      parentLi.classList.add("has-sub");
      const submenuButton = document.createElement("span");
      submenuButton.classList.add("submenu-button");
      submenuButton.addEventListener("click", function () {
        submenuButton.classList.toggle("submenu-opened");
        if (submenu.classList.contains("open")) {
          submenu.style.display = "none";
          submenu.classList.remove("open");
        } else {
          submenu.style.display = "block";
          submenu.classList.add("open");
        }
      });
      parentLi.insertBefore(submenuButton, parentLi.firstChild);
    });

    function resizeFix() {
      const mediasize = 1000;
      if (window.innerWidth > mediasize) {
        cssmenu
          .querySelectorAll("ul")
          .forEach((submenu) => (submenu.style.display = "block"));
      }
      if (window.innerWidth <= mediasize) {
        cssmenu.querySelectorAll("ul").forEach((submenu) => {
          submenu.style.display = "none";
          submenu.classList.remove("open");
        });
      }
    }

    resizeFix();
    window.addEventListener("resize", resizeFix);
  }

  window.addEventListener("DOMContentLoaded", initMenu);
})();
