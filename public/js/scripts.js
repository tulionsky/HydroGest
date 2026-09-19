/*!
 * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled"),
      );
    });
  }

//PARCIAL 2 MEJORA #1 
// Modo Oscuro

  const root = document.documentElement;
  const themeToggle = document.body.querySelector("#themeToggle");
  const themeIcon = document.body.querySelector("#themeIcon");

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (themeIcon) {
      themeIcon.classList.toggle("fa-moon", theme === "light");
      themeIcon.classList.toggle("fa-sun", theme === "dark");
    }
  };

  const savedTheme = localStorage.getItem("hidrogest|theme") || "light";
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("hidrogest|theme", next);
    });
  }
});