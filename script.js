/* =========================================================
   Bingi Sindhu — Portfolio JavaScript
   Theme switcher, project filtering, contact form validation.
   ========================================================= */

(function () {
  "use strict";

  // ---------- 1. Footer year ----------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- 2. Theme switcher ----------
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const THEME_KEY = "bs-portfolio-theme";

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  }
  updateThemeButton();

  function updateThemeButton() {
    if (!themeToggle) return;
    const current = root.getAttribute("data-theme") || "dark";
    const label = themeToggle.querySelector(".theme-label");
    const icon = themeToggle.querySelector(".theme-icon");
    if (current === "dark") {
      if (label) label.textContent = "Light";
      if (icon) icon.textContent = "☀";
      themeToggle.setAttribute("aria-pressed", "true");
      themeToggle.setAttribute("aria-label", "Switch to light theme");
    } else {
      if (label) label.textContent = "Dark";
      if (icon) icon.textContent = "◐";
      themeToggle.setAttribute("aria-pressed", "false");
      themeToggle.setAttribute("aria-label", "Switch to dark theme");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (err) {
        // storage may be unavailable; just continue
      }
      updateThemeButton();
    });
  }

  // ---------- 3. Project filtering ----------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-grid > [data-category]");
  const noResultsEl = document.getElementById("noResults");

  function applyFilter(filter) {
    let visibleCount = 0;
    projectCards.forEach(function (card) {
      const categories = (card.getAttribute("data-category") || "").split(/\s+/);
      const shouldShow = filter === "all" || categories.indexOf(filter) !== -1;
      if (shouldShow) {
        card.removeAttribute("hidden");
        card.style.display = "";
        visibleCount++;
      } else {
        card.setAttribute("hidden", "");
        card.style.display = "none";
      }
    });
    if (noResultsEl) {
      if (visibleCount === 0) {
        noResultsEl.removeAttribute("hidden");
      } else {
        noResultsEl.setAttribute("hidden", "");
      }
    }
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      applyFilter(btn.getAttribute("data-filter") || "all");
    });
  });

  // ---------- 4. Contact form validation ----------
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const statusBox = document.getElementById("formStatus");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(el, errorEl, msg) {
    if (!el || !errorEl) return;
    errorEl.textContent = msg;
    if (msg) {
      el.classList.add("is-invalid");
      el.setAttribute("aria-invalid", "true");
    } else {
      el.classList.remove("is-invalid");
      el.removeAttribute("aria-invalid");
    }
  }

  function validateName() {
    const v = (nameInput.value || "").trim();
    if (!v) {
      setError(nameInput, nameError, "Please enter your name.");
      return false;
    }
    if (v.length < 2) {
      setError(nameInput, nameError, "Name must be at least 2 characters.");
      return false;
    }
    setError(nameInput, nameError, "");
    return true;
  }

  function validateEmail() {
    const v = (emailInput.value || "").trim();
    if (!v) {
      setError(emailInput, emailError, "Please enter your email.");
      return false;
    }
    if (!emailPattern.test(v)) {
      setError(emailInput, emailError, "That doesn't look like a valid email.");
      return false;
    }
    setError(emailInput, emailError, "");
    return true;
  }

  function validateMessage() {
    const v = (messageInput.value || "").trim();
    if (!v) {
      setError(messageInput, messageError, "Please enter a message.");
      return false;
    }
    if (v.length < 10) {
      setError(messageInput, messageError, "Message must be at least 10 characters.");
      return false;
    }
    setError(messageInput, messageError, "");
    return true;
  }

  if (form) {
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    messageInput.addEventListener("blur", validateMessage);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const checks = [validateName(), validateEmail(), validateMessage()];
      const ok = checks.every(Boolean);
      if (!statusBox) return;
      statusBox.classList.remove("is-success", "is-error");
      if (ok) {
        statusBox.textContent = "Message validated. In a real deployment this would be sent.";
        statusBox.classList.add("is-success");
        form.reset();
      } else {
        statusBox.textContent = "Please fix the highlighted fields and try again.";
        statusBox.classList.add("is-error");
      }
    });
  }

  // ---------- 5. Smooth scroll + close mobile menu on nav click ----------
  const navLinks = document.querySelectorAll(".site-nav .nav-link");
  const navCollapse = document.getElementById("navMenu");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse && navCollapse.classList.contains("show")) {
        const btn = document.querySelector(".navbar-toggler");
        if (btn) btn.click();
      }
    });
  });
})();
