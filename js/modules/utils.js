export function handleHeaderScroll() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

export function handleBackToTop() {
  const backToTop = document.querySelector(".back__to--top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

export function handleDarkMode() {
  const darkModeBtn = document.querySelector(".dark__mode");
  const darkModeIcon = document.querySelector(".dark__mode--icon");
  const body = document.body;

  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
  }

  darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      darkModeIcon.classList.replace("bx-moon", "bx-sun");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      darkModeIcon.classList.replace("bx-sun", "bx-moon");
      localStorage.setItem("dark-mode", "disabled");
    }
  });
}

export function handleLanguageSwitcher() {
  const languageIcon = document.getElementById("language__icon");
  const languageDropdown = document.getElementById("language__dropdown");
  const languageOptions = document.querySelectorAll(".language__option");
  let currentLanguage = "en";

  const applyTranslations = async (language) => {
    try {
      const response = await fetch("./config/translations.json");
      const translations = await response.json();

      if (translations[language]) {
        Object.keys(translations[language]).forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            if (element.tagName === "META") {
              element.setAttribute("content", translations[language][id]);
            } else {
              element.innerText = translations[language][id];
            }
          }
        });
      } else {
        console.error(
          `No se encontraron traducciones para el idioma: ${language}`
        );
      }
    } catch (error) {
      console.error("Error al cargar las traducciones:", error);
    }
  };

  languageOptions.forEach((option) => {
    option.addEventListener("click", async function () {
      languageOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      currentLanguage = option.dataset.lang;

      console.log(`Idioma seleccionado: ${currentLanguage}`);
      await applyTranslations(currentLanguage);

      languageDropdown.classList.remove("show");
    });
  });

  languageIcon.addEventListener("click", function (event) {
    languageDropdown.classList.toggle("show");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".language")) {
      languageDropdown.classList.remove("show");
    }
  });

  applyTranslations(currentLanguage);
}
