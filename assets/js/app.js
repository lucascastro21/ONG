document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  // Navegação SPA
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("href").replace(".html", "");
      loadPage(page);
    });
  });

  function loadPage(page) {
    fetch(`assets/js/templates/${page}.html`)
      .then(res => res.text())
      .then(html => {
        main.innerHTML = html;
        if (page === "cadastro") {
          import("./form-validation.js").then(module => module.initValidation());
        }
      });
  }
});
