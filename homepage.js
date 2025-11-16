document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle logic
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggleBtn.textContent = "☀️";
      themeToggleBtn.setAttribute("aria-pressed", "true");
    } else {
      themeToggleBtn.textContent = "🌙";
      themeToggleBtn.setAttribute("aria-pressed", "false");
    }

    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
      themeToggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");

      // Feedback animation
      themeToggleBtn.style.transform = "scale(1.2)";
      setTimeout(() => {
        themeToggleBtn.style.transform = "";
      }, 150);
    });
  }

  // Logout button logic
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "login.html";
    });
  }

  // Lenis smooth scroll setup
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
